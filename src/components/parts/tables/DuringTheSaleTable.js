
import React, { Component } from 'react';
//import MilestoneModal from './MilestoneModal';

class DuringTheSaleTable extends Component { 

    render() {
    return(

   <div id="DuringTheSale-Table">

    
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
            <div className="col-10">     


      <p id = "p-blue-60" align="center"><strong> Project Milestones </strong></p>

      <br />

      <p id = "p-black-30">Below is the table of Milestones, the Mint number when the draws will take place, the min. number of winners and the reward.</p>

      <br />

      <p id = "p-black-30"><a href="#duringthesale">Find out more above </a></p>

      <br /><br />
      
              </div>
            <div className="col-1"></div>
        <br />

      </div></div>

               <table className="table table-sm table-hover">
                   <thead className="thead-dark">
                    <tr align="center">
                      <th scope="col" id="p-white-30">Milestone #</th>
                      <th scope="col" id="p-white-30">Mint #</th>
                      <th scope="col" id="p-white-30">Winners</th>
                      <th scope="col" id="p-white-30">Reward</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                    <tr align="center">
                      <th scope="row" id="p-black-30">1</th>
                      <th scope="row" id="p-black-30">1,019</th>
                      <th scope="row" id="p-black-30">50</th>
                      <th scope="row" id="p-black-30">
                          <a className="" href="#" role="button" data-toggle="modal" data-target="#MilestoneModal">Random Traits</a>
                      </th>
                    </tr>




                    <tr align="center">
                      <th scope="row" id="p-black-30">2</th>
                      <th scope="row" id="p-black-30">2,019</th>
                      <th scope="row" id="p-black-30">50</th>
                      <th scope="row" id="p-black-30">
                          <a className="" href="#" role="button" data-toggle="modal" data-target="#MilestoneModal">Random Traits</a>
                      </th>
                    </tr>

                    <tr align="center">
                      <th scope="row" id="p-black-30">3</th>
                      <th scope="row" id="p-black-30">4,019</th>
                      <th scope="row" id="p-black-30">50</th>
                      <th scope="row" id="p-black-30">
                          <a className="" href="#" role="button" data-toggle="modal" data-target="#MilestoneModal">Random Traits</a>
                      </th>
                    </tr>

                    <tr align="center">
                      <th scope="row" id="p-black-30">4</th>
                      <th scope="row" id="p-black-30">7,019</th>
                      <th scope="row" id="p-black-30">50</th>
                      <th scope="row" id="p-black-30">
                          <a className="" href="#" role="button" data-toggle="modal" data-target="#MilestoneModal">Random Traits</a>
                      </th>
                    </tr>

                    <tr align="center">
                      <th scope="row" id="p-black-30">5</th>
                      <th scope="row" id="p-black-30">9,019</th>
                      <th scope="row" id="p-black-30">50</th>
                      <th scope="row" id="p-black-30">
                          <a className="" href="#" role="button" data-toggle="modal" data-target="#MilestoneModal">Random Traits</a>
                      </th>
                    </tr>

                    <tr align="center">
                      <th scope="row" id="p-black-30">6</th>
                      <th scope="row" id="p-black-30">9,949</th>
                      <th scope="row" id="p-black-30">50</th>
                      <th scope="row" id="p-black-30">
                          <a className="" href="#" role="button" data-toggle="modal" data-target="#MilestoneModal">Random Traits</a>
                      </th> 
                    </tr>

                   <tr align="center">
                      <th scope="row" id="p-black-30">7</th>
                      <th scope="row" id="p-black-30">9,999</th>
                      <th scope="row" id="p-black-30">50</th>
                      <th scope="row" id="p-black-30">
                          <a className="" href="#" role="button" data-toggle="modal" data-target="#MilestoneModal">Random Traits</a>
                      </th>
                    </tr>

                  </tbody>
                </table>

          </div>

          )}
}
export default DuringTheSaleTable;
