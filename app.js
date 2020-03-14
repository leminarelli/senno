let createError = require("http-errors");
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");
let logger = require("morgan");
let util = require("util");

let session = require("express-session");
let flash = require("connect-flash");

let version = require("./package.json").version;

////////////////////
// LOGGING
////////////////////
const winston = require("winston");
const { format } = require("winston");
const { combine, timestamp, label, printf } = format;
const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});
const transportFormat = combine(
  label({ label: "SENNO DELTA" }),
  timestamp(),
  myFormat
);
const myconsole = new winston.transports.Console({
  format: transportFormat
});
winston.add(myconsole);
const myfile = new winston.transports.File({
  format: transportFormat,
  filename: "senno_sysout.log"
});
winston.add(myfile);

winston.level = process.env.LOG_LEVEL || "info";

winston.silly("Winston inicializado");
////////////////////

let app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(flash()); // use connect-flash for flash messages stored in session

app.use(function(req, res, next) {
  app.locals.req = req;
  next();
});

String.prototype.getInitials = function() {
  let nome = this;
  let result = "";
  if (nome) {
    let nomes = nome.split(" ");
    let nomeFirst = "";
    let nomeLast = "";
    nomeFirst = nomes[0];
    if (nomes.length > 1) {
      nomeLast = nomes[nomes.length - 1];
    }
    nomeFirst = nomeFirst.charAt(0).toUpperCase();
    nomeLast = nomeLast.charAt(0).toUpperCase();
    result = `${nomeFirst}${nomeLast}`;
  } else {
    result = "";
  }
  return result;
};

// Formats
let formats = {
  datetime: {
    long: "DD/MM/YYYY HH:mm"
  },
  date: {
    short: "DD/MM/YYYY",
    datepicker: "DD-MM-YYYY"
  }
};
global.formats = formats;
global.HEADERS = {
  X_API_HTTP_METHOD: "x-api-http-method"
};
global.socketClients = {};
global.socketUsers = {};
global.currentTenant = {};
global.userOrganizationProfile = {};
// LODASH
global._ = require("lodash");
global.merge = function(_a, _b, prop, propB) {
  let a = _a;
  let b = _b;
  propB = propB || prop;
  let c = global._.cloneDeep(a);
  c.forEach(function(aItem) {
    b.forEach(function(bItem) {
      if (global._.isEqual(aItem[prop], bItem[propB])) {
        Object.assign(aItem, bItem);
      }
    });
  });
  return c;
};
global.arrayIntersectionWith = (a, b, comp) =>
  a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

// SennoSettings
global.sennoSettings = {
  uploadDir: "public/img/uploads/", // Diretório de upload de arquivos.
  publicDir: "public/", // Diretório publico
  logoPath: "/images/sennoLogo.png"
};
// Random File Name
global.getRandomFileName = function(ext) {
  return (
    (Math.random().toString(36) + "00000000000000000").slice(2, 10) +
    Date.now() +
    ext
  );
};
// Random
global.getRandomInt = function(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
    .toLocaleString("pt-BR")
    .replace(/,/g, "#")
    .replace(/\./g, ",")
    .replace(/#/g, ".");
};
// Time Remaining
global.getTimeRemaining = function(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    dias: days,
    horas: hours < 10 ? "0" + hours : hours,
    minutos: minutes < 10 ? "0" + minutes : minutes,
    segundos: seconds < 10 ? "0" + seconds : seconds
  };
};
global.shuffle = function(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

global.normalizeString = function(string) {
  return string.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

String.prototype.normalizeString = function() {
  return global.normalizeString(this);
};

String.prototype.capitalizeFirstLetter = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// EJS Helpers
app.locals.h = require("./config/ejs_helpers");

// ROUTERS
let loginRouter = require("./routes/login");
//
let indexRouter = require("./routes/index");

let cookie = cookieParser("8_$}9597;J48(n%I[/=\5=@:f%&F=g");

// Unsecure routes
app.use("/login", loginRouter);
// Rotas dos Usuarios
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  winston.error(err.message);

  if (err.message === "Perfil não encontrado") {
    delete req.session.currentTenant;
    req.logout();
    return res.redirect("/login");
  }

  // render the error page
  res.status(err.status || 500);
  if (err.status === 404) res.render("404");
  else if (
    err.status === 403 ||
    // Permissao ainda nao definida
    err.name == "ActivityNotFoundException"
  ) {
    res.render("404", {
      message: err.message,
      error: err
    });
  } else {
    // Verifica se usuario possui URL para voltar e seta o FlashMessage
    if (
      req.user &&
      req.session.backURL.substring(req.session.backURL.lastIndexOf("/")) !=
        "/login"
    ) {
      req.flash("flash_message", err.message);
      res.redirect(req.session.backURL);
      console.log(
        "redirecting to req.session.backURL = " + req.session.backURL
      );
      return;
    } else {
      res.render("error", {
        message: err.message,
        error: err
      });
      return;
    }
  }
  return;
});

module.exports = app;
