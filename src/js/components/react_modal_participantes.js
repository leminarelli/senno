import React from "react";
import SpinnerLDSRipple from "./react_spinner_lds_ripple";
import Icon from "./react_icon";
import Modal from "./react_modal";
import { withTranslation } from "react-i18next";

class _ModalParticipantes extends Modal {
  constructor(props) {
    super(props);

    this.state = this.getInitialState();

    this.modal = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    super.componentDidMount();
    let that = this;
    window.$(this.modal.current).on("show.bs.modal", function(event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var id = button.data("id"); // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this);

      that.setState({
        loading: false,
        participante_id: id
      });
    });
  }

  //   componentDidUpdate() {}

  getInitialState() {
    return {
      loading: true,
      participante_id: ""
    };
  }

  handleSubmit(e) {
    if (typeof this.props.onSubmit === "function") {
      this.props.onSubmit(e);
    }
  }

  render() {
    const { t, i18n } = this.props;

    return (
      <div
        ref={this.modal}
        className="modal fade"
        id="modal_participantes"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal_participantes"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal_participantes"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {t("modal_participantes.title")}
              </h5>

              <Icon icon="ellipsis" />
            </div>

            {this.state.loading ? (
              <div className="modal-body text-center">
                <SpinnerLDSRipple />
              </div>
            ) : (
              <div>
                <div className="modal-body">
                  <img
                    className="rounded-circle mx-auto d-block"
                    src="/images/img1.png"
                  />
                  <h3 className="text-center">Políticas Públicas</h3>
                  <hr
                    className="mx-auto d-block"
                    style={{
                      width: "235px",
                      borderTop: "1px solid rgba(0, 0, 0, 0.58)"
                    }}
                  ></hr>
                  <h6 className="text-center mx-auto d-block">
                    <Icon icon="participantes" /> <span className="color-primary">13</span> / 36
                  </h6>
                  <h6 className="text-center pb-3">
                    <span className="color-primary">PARTICIPANTES</span> / CONVIDADOS
                  </h6>
                  <h6 className="text-center p-3">PARTICIPANTES</h6>
                  <table className="table border-0">
                    <tbody>
                      <tr>
                        <th className="p-0" scope="row">
                          <img
                            src="/images/img1.png"
                            className="circle-avatar participantes-avatar border-0"
                            alt="Img"
                          />
                        </th>
                        <td className="w-50">Aline Macedo</td>
                        <td>
                          <Icon icon="participantes" /> 6
                        </td>
                        <td>
                          <Icon icon="plataforma" /> 5
                        </td>
                        <td>
                          <Icon icon="medalha" /> 0
                        </td>
                      </tr>
                      <tr>
                        <th className="p-0" scope="row">
                          <img
                            src="/images/img1.png"
                            className="circle-avatar participantes-avatar border-0"
                            alt="Img"
                          />
                        </th>
                        <td className="w-50">Aline Moraes</td>
                        <td>
                          <Icon icon="participantes" /> 6
                        </td>
                        <td>
                          <Icon icon="plataforma" /> 4
                        </td>
                        <td>
                          <Icon icon="medalha" /> 0
                        </td>
                      </tr>
                      <tr>
                        <th className="p-0" scope="row">
                          <img
                            src="/images/img1.png"
                            className="circle-avatar participantes-avatar border-0"
                            alt="Img"
                          />
                        </th>
                        <td className="w-50">Natália Barros</td>
                        <td>
                          <Icon icon="participantes" /> 7
                        </td>
                        <td>
                          <Icon icon="plataforma" /> 7
                        </td>
                        <td>
                          <Icon icon="medalha" /> 0
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h6 className="text-center p-3">SPONSORS</h6>
                  <table className="table border-0">
                    <tbody>
                      <tr>
                        <th className="p-0" scope="row">
                          <img
                            src="/images/eletrobras.png"
                            className="circle-avatar participantes-avatar border-0"
                            alt="Img"
                          />
                        </th>
                        <td className="w-75">Eletrobrás</td>
                        <td>
                          <Icon icon="sponsor" />
                        </td>
                      </tr>
                      <tr>
                        <th className="p-0" scope="row">
                          <img
                            src="/images/petrobras.png"
                            className="circle-avatar participantes-avatar border-0"
                            alt="Img"
                          />
                        </th>
                        <td className="w-75">Petrobrás</td>
                        <td>
                          <Icon icon="sponsor" />
                        </td>
                      </tr>
                      <tr>
                        <th className="p-0" scope="row">
                          <img
                            src="/images/vale.png"
                            className="circle-avatar participantes-avatar border-0"
                            alt="Img"
                          />
                        </th>
                        <td className="w-75">Vale</td>
                        <td>
                          <Icon icon="sponsor" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary mr-auto"
                    onClick={this.handleClose}
                  >
                    {t("global.close")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const ModalParticipantes = withTranslation("common")(_ModalParticipantes);

export default ModalParticipantes;
