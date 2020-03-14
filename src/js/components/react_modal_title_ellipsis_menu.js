import React from 'react';
import Icon from './react_icon';
import { Popover } from 'reactstrap';
import Modal from './react_modal';
import { withTranslation } from 'react-i18next';

class _ModalTitleEllipsisMenu extends Modal {
    constructor(props){
        super(props);

        this.state = this.getInitialState();

        this.itemAjuda = React.createRef();
        this.itemSysop = React.createRef();

        this.popoverToggle = this.popoverToggle.bind(this);

        this.target = props.target || '';
    }

    getInitialState() {
        return {
            popoverOpen: false
        }
    }

    popoverToggle(e) {
        switch (e.relatedTarget) {
            case null:
                break;
            case this.itemSysop.current:
                console.log('Sysop!')
                break;
            case this.itemAjuda.current:
                console.log('Ajuda!')
                break;
            default:
                break;
        }
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {

        const { t, i18n } = this.props;

        let btnClassName = this.props.btnClassName || '';

        return (
            <React.Fragment>
                <button id={ this.target } type="button" className={"close " + btnClassName}>
                    <Icon icon='ellipsis'/> 
                </button>
                <Popover trigger="focus" placement="bottom" target={ this.target } isOpen={ this.state.popoverOpen } toggle={ this.popoverToggle }>
                    <div className='senno-popover-body p-0'>
                        <div className='list-group'>
                            <a ref={ this.itemAjuda } href='#' className='list-group-item list-group-item-action menu-user-item' onClick={ (e) => alert('Ajuda') }>
                                <i className='fa fa-question'></i>
                                <span className='badge-sm badge-pill badge-danger badge-up-sm invisible'>&nbsp;</span> { t('modal_title_ellipsis_menu.help') }
                            </a>
                            <a ref={ this.itemSysop } href='#' className='list-group-item list-group-item-action menu-user-item' onClick={ (e) => console.log('Sysop') }>
                                <i className='fa fa-traffic-light'></i>
                                <span className='badge-sm badge-pill badge-danger badge-up-sm invisible'>&nbsp;</span> { t('modal_title_ellipsis_menu.sysop') }
                            </a>
                        </div>
                    </div>
                </Popover>
            </React.Fragment>
        )
    }
}

const ModalTitleEllipsisMenu = withTranslation('common')(_ModalTitleEllipsisMenu);

// const ModalTitleEllipsisMenu = (props) => (
//     <Suspense fallback={<div />}>
//         <WithTranslation {...props} />
//     </Suspense>
//)

export default ModalTitleEllipsisMenu;