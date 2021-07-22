
import React, { Component } from 'react';

class MilestoneModal extends Component { 

    render() {
    return(
        <div id="Parent-MilestoneModal">
                  <div className="modal fade" id="MilestoneModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Milestone Random Trait Reward List</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                        
                          <p id = "p-black-30">Once you mint your <strong>CMNFT</strong> token(s), each token will automatically be entered into the next <strong>Milestone Give Away</strong> draw.</p>

                          <br />

                          <p id = "p-black-30">There will be 50 winners per <strong>Milestone Give Away</strong> draw, one of the traits below will be randomly assigned to the winning tokens of each draw.</p>

                          <br />

                          <div className = "container" align="center">
                          <div className = "row">
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-primary">MINT-2FREE</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-primary">MINT-4FREE</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-primary">MINT-6FREE</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-primary">MINT-8FREE</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-primary">MINT-10FREE</span></p></div>

                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-success">5% DISCOUNT</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-success">10% DISCOUNT</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-success">15% DISCOUNT</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-success">20% DISCOUNT</span></p></div>
                            <div className = "col-4"><p id = "p-black-40"><span className="badge badge-success">25% DISCOUNT</span></p></div>

                          </div></div>

                            <br /><br />

                            <p id = "p-black-30"><strong>MINT-XFREE</strong> allows you to mint 'X' NFT's FREE (you pay the gas) and </p>

                            <p id = "p-black-30"><strong>x% DISCOUNT</strong> offers 'X'% discount on the minting cost of NFT's (you pay the gas)</p>

                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
         </div>
          )}
}
export default MilestoneModal;                  