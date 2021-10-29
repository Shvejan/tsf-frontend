import React from "react";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import "./stylesheet.css";
import { useParams } from "react-router-dom";
import user_data from "../../user_data.json";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";

const projectData = user_data;

export function Profiles(props) {
  const { id } = useParams();
  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <a href="/pdff.pdf">
        <span>Dr. Ameet Chavan</span>
      </a>
      <Footer />
    </div>
    // <div>
    //   <Navbar />
    //   <body
    //     data-spy="scroll"
    //     data-target=".navbar"
    //     data-offset="50"
    //     id="body"
    //     bgcolor="#fcfcfc"
    //   >
    //     <div className="row outerrow">
    //       <div className="col-sm-2 col-xs-0 col-lg-2"></div>
    //       <div className="col-sm-8 col-xs-12 col-lg-8">
    //         <div>
    //           <div className="panel1" id="toppnlhead">
    //             <img src={projectData[id]["profPic"]} id="prfpic" />
    //             <span id="username">{projectData[id]["name"]}</span>
    //             <br />
    //             <br />
    //             <h2>
    //               <strong> About me</strong>
    //             </h2>
    //             <p>{projectData[id]["disc"]}</p>
    //           </div>
    //           <div className="panel1">
    //             <div className="row">
    //               <div className="col-sm-4 col-lg-4 toppnlbody">
    //                 <label>Languages</label>
    //                 {projectData[id]["languages"].map((l, id) => (
    //                   <h4 className="langs" key={id}>
    //                     <h6>{l}</h6>
    //                   </h4>
    //                 ))}

    //                 <hr />
    //                 <label>Education</label>
    //                 <h4 className="langs">
    //                   <h5>{projectData[id]["education"]}</h5>
    //                 </h4>
    //               </div>
    //               <div className="col-sm-8 col-lg-8">
    //                 <label>
    //                   <strong> Projects completed on Techsavvy</strong>
    //                 </label>
    //                 {projectData[id]["jobs_on_tsf"].map((j, id) => (
    //                   <div className="endrsmnts">
    //                     <label>
    //                       {j["company"]}
    //                       <h6>{j["title"]}</h6>
    //                     </label>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <br />
    //         <div>
    //           <div className="panel1" id="pnls">
    //             <label>Skills</label>
    //           </div>
    //           <div className="panel1">
    //             <div>
    //               {projectData[id]["skills"].map((s, id) => (
    //                 <span className="skillname">{s}</span>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //         <br />
    //         <div>
    //           <div className="panel1" id="pnls">
    //             <label>Client Reviews</label>
    //             <br />
    //             <span className="tstmnlscaption">
    //               <strong>Endorsements from past clients</strong>
    //             </span>
    //           </div>
    //           <div className="panel1">
    //             {projectData[id]["jobs_on_tsf"].map((j, id) => (
    //               <div className="endrsmnts">
    //                 <label>
    //                   <strong>{j["company"]}</strong>
    //                 </label>
    //                 <h6>{j["title"]}</h6>
    //                 <h6>
    //                   <strong>Rating: {j["rating"]}</strong>
    //                 </h6>
    //                 <br />
    //                 <h6>Feedback</h6>
    //                 <p>{j["feedback"]}</p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //         <br />
    //         <div>
    //           <div className="panel1" id="pnls">
    //             <label>Previous Projects</label>
    //           </div>
    //           <div className="panel1">
    //             {projectData[id]["projects"].map((j, id) => (
    //               <div className="endrsmnts">
    //                 <label>
    //                   <strong>{j["title"]}</strong>
    //                 </label>
    //                 <br />
    //                 <img
    //                   src={j["image"]}
    //                   alt="project image"
    //                   style={{ height: "180px" }}
    //                 />
    //                 <br />
    //                 <br />
    //                 <h6>{j["disc"]}</h6>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //         <br />

    //         <br />
    //         <div>
    //           <div className="panel1" id="pnls">
    //             <label>Certifications</label>
    //           </div>
    //           <div className="panel1">
    //             {projectData[id]["certificates"].map((j, id) => (
    //               <div className="endrsmnts">
    //                 <label>
    //                   <strong>{j["title"]}</strong>
    //                 </label>
    //                 <br />
    //                 <img
    //                   src={j["image"]}
    //                   alt="project image"
    //                   style={{ height: "250px" }}
    //                 />
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //         <br />
    //       </div>
    //     </div>
    //   </body>
    //   <Footer />
    // </div>
  );
}
