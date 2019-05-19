import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            suscipit accusantium corporis illo beatae fugiat ducimus
            consequuntur autem voluptatibus, nemo perferendis non vitae
            similique, commodi dolore doloribus expedita asperiores voluptatum!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Iván Cadena</div>
          <div>18 de mayo de 2019, 20:26</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
