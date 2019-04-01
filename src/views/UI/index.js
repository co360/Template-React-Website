import React, { Component } from 'react';
import { connect } from 'react-redux'
// import '../../css/App.css';
import MessageBox from './messagebox'
// import Loading from './loading'
import ConfirmBox from './conFirmbox'
class UI extends Component {
  render() {
    let { uiReducer } = this.props
    return (
      uiReducer ?
        (
          <div className="Ui">
            <MessageBox isOpen={uiReducer.showMessage} message={uiReducer.message} title={uiReducer.titleMessage} />
            {/* <Loading show={uiReducer.showLoading} /> */}
            <ConfirmBox isOpen={uiReducer.showConfirmBox} titleConfirm={uiReducer.titleConfirm} bodyConfirm={uiReducer.bodyConfirm} bodyConfirmOK={uiReducer.bodyConfirmOK} bodyConfirmNO={uiReducer.bodyConfirmNO} titleBtnOK={uiReducer.titleBtnOK} titleBtnNO={uiReducer.titleBtnNO} />
          </div>

        )
        : null
    );
  }
}

const mapStateToProps = (state) => {
  return { uiReducer: state.uiReducer }
}
export default connect(mapStateToProps)(UI);
