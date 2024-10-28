import React from "react";
import Resume from "../../public/resume.pdf";

export default function DownloadResume() {
  return (
    <a href={Resume} download="Ankit Kumar Mitra - Resume" className="downloadResumeButton">
      Resume <i class="fa fa-download" aria-hidden="true"></i>
    </a>
  );
}
