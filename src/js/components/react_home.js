import React, { Suspense } from "react";
import { withTranslation, Trans } from "react-i18next";
import PageLoader from "./react_page_loader";
import SennoPage from "./react_senno_page";
import ModalParticipantes from "./react_modal_participantes";
import ModalDeletar from "./react_modal_confirmar_deletar_ideia";

class Home extends SennoPage {
  constructor(props) {
    super(props);

    this.state = {};
    this.state._loading = (function() {})();
  }

  componentDidMount() {}

  componentDidUpdate() {
    const { t, i18 } = this.props;
    super.setTitle(null, t);
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div ref={this.list}>
        <div id="content" className="m-auto">
          <div className="m-4">
            <p className="text-subheader">
              <span className="text-subheader-bold mr-2">
                {t("page_home.showcase.platforms.title")}
              </span>
              {t("page_home.showcase.platforms.subtitle")}
            </p>
            <ul className="sugestoes row">
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>
                <h4>Nome do conteudo</h4>
                <p>
                  <span>Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>

                <h4>Nome do conteudo</h4>
                <p>
                  <span> Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>

                <h4>Nome do conteudo</h4>
                <p>
                  <span> Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>

                <h4>Nome do conteudo</h4>
                <p>
                  <span> Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
            </ul>
          </div>
          <div className="m-4">
            <p className="text-subheader">
              <span className="text-subheader-bold mr-2">
                {" "}
                {t("page_home.showcase.ideas.title")}{" "}
              </span>{" "}
              {t("page_home.showcase.ideas.subtitle")}
            </p>

            <ul className="sugestoes row">
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>

                <h4>Nome do conteudo</h4>
                <p>
                  <span>Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>

                <h4>Nome do conteudo</h4>
                <p>
                  <span> Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>

                <h4>Nome do conteudo</h4>
                <p>
                  <span> Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
              <li className="col-md-3 destaques-home">
                <div className="img-destaque">
                  <img
                    src="https://placekitten.com/g/800/500"
                    alt="Video"
                    className="img-fluid"
                  />
                </div>

                <h4>Nome do conteudo</h4>
                <p>
                  <span> Atualizado 1 semana atrás</span> por{" "}
                  <a href="#">Senno</a>
                </p>
                <p className="acessos">590 404</p>
              </li>
            </ul>
          </div>

          <p>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modal_confirmar_deletar_ideia"
            >
              Abrir Modal
            </button>
          </p>

          <p>
            <button
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#modal_participantes"
            >
              Novo Modal
            </button>
          </p>
        </div>
        <ModalDeletar />
        <ModalParticipantes />
      </div>
    );
  }
}

const WithTranslation = withTranslation("common")(Home);

const HomePage = props => (
  <Suspense fallback={<PageLoader />}>
    <WithTranslation {...props} />
  </Suspense>
);
export default HomePage;
