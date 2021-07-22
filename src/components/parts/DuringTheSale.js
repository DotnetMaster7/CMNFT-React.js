
import React, { Component } from 'react';
//import Modal from 'react-modal';
import DuringTheSaleDesktop from './desktop-view/DuringTheSaleDesktop';
import DuringTheSaleIpad from './ipad-view/DuringTheSaleIpad';
import DuringTheSaleMobile from './mobile-view/DuringTheSaleMobile';
import DuringTheSaleTable from './tables/DuringTheSaleTable';
import MilestoneModal from './modals/MilestoneModal';

class DuringTheSale extends Component { 

    render() {
    return(
      
      <div id="DuringTheSale">
      <div className="container-fluid alert alert-light-blue">
        <div className="row">
          <div className="col-1"></div>
            <div className="col-10">

                {/* View of Desktop Ipad */}
                <div className="container-fluid d-none d-lg-block">

                    <DuringTheSaleDesktop />
                    <MilestoneModal />

                </div>

                { /* View of IPAD Vertical */ }
    
                <div className="d-none d-xs-none d-sm-none d-md-block d-lg-none d-xl-none">

                    <DuringTheSaleIpad />

                </div>


                { /* View of Mobile */ }
                <div className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none"> 

                    <DuringTheSaleMobile />

                </div>




                </div>{/* End col-10 */}
          <div className="col-1"></div>

      </div></div>

              <DuringTheSaleTable />{/* See components / parts / tables / */}
              

              </div>
                
          )}
}
export default DuringTheSale;