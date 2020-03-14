/*
** GOOGLE DRIVE
*/
export function getGoogleDriveSettings() {
    return {
        appId: "681827592364"
        // The Browser API key obtained from the Google API Console.
        , developerKey: 'AIzaSyD2IGzte6BH53rQzQkyEopZrovJvVe7NC0'
        // The Client ID obtained from the Google API Console. Replace with your own Client ID.
        , clientId: '681827592364-o194001g10s0n5d4d759bbenfqn6u88f.apps.googleusercontent.com'
        // Scope to use to access user's Drive items.
        , scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
        , pickerApiLoaded: false
        , oauthToken: null
    }
}

// Create and render a Picker object for searching images.
function googleDriveCreatePicker(googleDriveSettings, pickerCallback) {
    if (googleDriveSettings.pickerApiLoaded && googleDriveSettings.oauthToken) {
        var view = new google.picker.DocsView()
            .setParent('root')
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true);
        var viewSharedWithMe = new google.picker.DocsView()
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true)
            .setOwnedByMe(false);
        var viewStarredSharedWithMe = new google.picker.DocsView()
            .setIncludeFolders(true)
            .setSelectFolderEnabled(true)
            .setStarred(true)
            .setLabel("Starred");
        var picker = new google.picker.PickerBuilder()
            .enableFeature(google.picker.Feature.MULTISELECT_ENABLED)
            .setAppId(googleDriveSettings.appId)
            .setOAuthToken(googleDriveSettings.oauthToken)
            .addView(view)
            .addView(viewSharedWithMe)
            .addView(viewStarredSharedWithMe)
            .setDeveloperKey(googleDriveSettings.developerKey)
            .setCallback(pickerCallback)
            .build();
        picker.setVisible(true);
    }
}

export function getGoogleDriveMethods(googleDriveSettings, pickerCallback) {
    return {
        handleAuthResult: function(authResult) {
            if (authResult && !authResult.error) {
                googleDriveSettings.oauthToken = authResult.access_token;
                googleDriveCreatePicker(googleDriveSettings, pickerCallback)
            } else {
                console.log(authResult.details);
            }
        },
        onPickerApiLoad: function() {
            googleDriveSettings.pickerApiLoaded = true;
        }
    }
}
/*
*/

/*
** INPUT HANDLERS
*/

export function handleRadio(event, prop, obj, callback) {
    let state = obj || this.state;
    state[prop] = event.target.value;
    this.setState(state, () => {
        if(typeof callback === 'function')
            callback();
    });
}

export function handleCheckbox(event, prop, obj, callback) {
    let state = obj || this.state;
    if(!state[prop]) {
        state[prop] = event.target.value;
    }
    else {
        if(state[prop] === 'true' || state[prop] === true )
            state[prop] = false;
        else
            state[prop] = true;
    }
    this.setState(state, () => {
        if(typeof callback === 'function')
            callback();
    });
}

export function handleSwitch(prop, obj, callback) {
    let state = obj || this.state;

    if(state[prop] == true) {
        state[prop] = false;
    } else if(state[prop] == false) {
        state[prop] = true;
    }
    else if(state[prop] === 'true') {
        state[prop] = 'false';
    } else {
        state[prop] = 'true';
    }

    this.setState(state, () => {
        
        if(typeof callback === 'function')
            callback();
    });
}

export function handleText(event, prop, obj, callback) {
    let state = obj || this.state;

    state[prop] = event.target.value;

    this.setState(state, () => {
        if(typeof callback === 'function')
            callback();
    });
}

export function handleValue(value, prop, obj, callback) {
    let state = obj || this.state;

    state[prop] = value;

    this.setState(state, () => {
        if(typeof callback === 'function')
            callback();
    });
}
/*
**
*/

/*
** CHART
*/

export function getChartToolboxOpts() {
    return {
        show : true,
        feature : {
            mark : {show: true},
            magicType : {
                show: true,
                type: ['pie', 'funnel']
            },
            restore : {show: true, title: 'Restaurar'},
            saveAsImage : {show: true, title: 'Salvar\nImagem'}
        }
    }
}


/*
** INITIAL STATES
*/

export function getInitialStateMediaAvaliacoes() {
    return {
        report_matriz_di: {
            valorDificuldade: 'Pendente',
            valorImpacto: 'Pendente'
        },
        report_matriz_inovacao: {
            valorDisrupcao: 'Pendente'
        },
        report_retorno: {
            valorRetorno: 'Pendente'
        },
        report_tempo: {
            valorTempo: 'Pendente'
        }
    }
}

/*
** EventHandlers
*/
export function goToAnchorHref(e) {
    window.location.href = e.target.href;
}

export function goToLink(link) {
    window.location.href = link;
}

/*
** FUNCTIONS
*/

export function between(x, min, max) {
    return x >= min && x < max;
}

export function getColor(percent) {
    let red = 255;
    let green = 0;
    if(between(percent, 0, 50))
        green += 255 * percent * 2 / 100;
    else if(between(percent, 50, 100.0001)) {
        red *= 1 + (1 - (percent * 2)/100);
        green = 255;
    }
    else {
        red = 0;
        green = 255;
    }
    return `rgb(${red},${green},0)`;
}

let _public_images = "/images";

export const EMPTYSTATES =
{ "": ""
, "AGENTE"                : { "image": `${ _public_images }/` }
, "AGENTEMINICARD"        : { "image": `${ _public_images }/empty-agentes-minicard.svg` }
, "ANEXO"                 : { "image": `${ _public_images }/empty-anexos.svg` }
, "ANEXOMINICARD"         : { "image": `${ _public_images }/` }
, "AVALIACAO"             : { "image": `${ _public_images }/` }
, "AVALIACAOMINICARD"     : { "image": `${ _public_images }/empty-avaliacoes-minicard.svg` }
, "CONEXAO"               : { "image": `${ _public_images }/` }
, "CONEXAOMINICARD"       : { "image": `${ _public_images }/empty-conexoes-minicard.svg` }
, "GRUPO"                 : { "image": `${ _public_images }/empty-grupos.svg` }
, "GRUPOMINICARD"         : { "image": `${ _public_images }/empty-grupos-minicard.svg` }
, "IDEIA"                 : { "image": `${ _public_images }/empty-ideias.svg` }
, "IDEIAMINICARD"         : { "image": `${ _public_images }/empty-ideias-minicard.svg` }
, "INVESTIMENTO"          : { "image": `${ _public_images }/empty-investimentos.svg` }
, "INVESTIMENTOMINICARD"  : { "image": `${ _public_images }/` }
, "MEDALHA"               : { "image": `${ _public_images }/` }
, "MEDALHAMINICARD"       : { "image": `${ _public_images }/empty-medalhas-minicard.svg` }
, "MODERADOR"             : { "image": `${ _public_images }/` }
, "MODERADORMINICARD"     : { "image": `${ _public_images }/empty-moderadores-minicard.svg` }
, "NOTIFICACAO"           : { "image": `${ _public_images }/empty-notificacoes.svg` }
, "NOTIFICACAOMINICARD"   : { "image": `${ _public_images }/` }
, "PATROCINIO"            : { "image": `${ _public_images }/` }
, "PATROCINIOMINICARD"    : { "image": `${ _public_images }/` }
, "PLATAFORMA"            : { "image": `${ _public_images }/empty-plataformas.svg` }
, "PLATAFORMAMINICARD"    : { "image": `${ _public_images }/empty-plataformas-minicard.svg` }
, "IMAGE"                 : { "image": `${ _public_images }/empty-image.svg` }
}

export const richtextEditorFocusOnTab = (editor) => {
    
}

export const moveFocusOnTabToRichTextEditor = (e, editor) => {
    let key = e.keyCode || e.which;
    let ctrl = e.ctrlKey || e.metaKey;
    key = e.key;

    if(!ctrl) {
        // ESC
        if(key === 'Tab') {
            e.preventDefault()
            if(editor) {
                // window._EDITOR = editor;
                editor.focus();
                // setTimeout(() => { editor.focus() }, 200)
            }
        }
    }

    return true;
}

/*
** PRECISA DO .bind(this)
*/
export const setRichTextEditorRef = function(editor, richTextEditorRefName = 'editor') {
    this[richTextEditorRefName] = editor;
}

/*
** PRECISA DO .bind(this)
*/
export const onKeyDown_MoveFocusOnTabToRichTextEditor = function(e, richTextEditorRefName = 'editor') {
    if(this[richTextEditorRefName] && this[richTextEditorRefName].editor)
        moveFocusOnTabToRichTextEditor(e, this[richTextEditorRefName].editor)
}

/*
** PRECISA DO .bind(this)
*/
export const refreshUser = function() {
    let that = this;
    window.$.ajax({
        url: `/api/usuario/`
    }).done(function(response) {
        that.setState({
            user: response.data.usuario
        })
    }).fail(function(response) {
        console.log(response)
    });
}