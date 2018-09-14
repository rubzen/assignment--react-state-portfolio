import React, { Component } from 'react';
import { projectData } from '../data/datasource';
import Project from './Project';

/*  Advice:
   (1) Create the component's JSX by using .map() on `projectData`
       you will want to map to an array of <Project/> components


   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()
 */

class FilterProjects extends Component {
  constructor() {
    super();
    this.state = {
      filterType: "all"
    };
  }

  handleFilterClick(filter) {
    console.log("click");
    this.setState({
      filterType: filter
    });
  }

  render() {
    //const projectSelectedClassVal = "project-type--selected";
    const { allClassName, teamClassName, soloClassName, filterType } = this.state
/*
    let allSelectedRenderedClass = projectSelectedClassVal;
    let soloSelectedRenderedClass = "";
    let teamSelectedRenderedClass = "";
*/
    let filterListProjects = projectData.filter(project => {
      if (filterType === "all") return true;
      if (project.solo === true && filterType === "true") return true;
      if (project.solo === false && filterType === "false") return true;
    });


    // NOTE:
    // change value of '*SelecteedRenderecClass' variables based on component state for whether
    //'all', 'team', or 'solo' is selected

    return <section>
        <h4>Projects</h4>

        <div className="project-types-list">
        <span onClick={() => this.handleFilterClick('all')} data-ptype="all"
          className={`project-type project-type--all project-type--selected`}>
            All
          </span>

          <span onClick={() => this.handleFilterClick('true')} data-ptype="solo"
            className={`project-type project-type--solo}`}>
            <i className="ion-person" />
            Solo
          </span>

          <span onClick={() => this.handleFilterClick('false')} data-ptype="team"
            className={`project-type project-type--team`}>
            <i className="ion-person-stalker" />
            Team
          </span>
        </div>

        <div className="projects-list">
          {/* Step (1) --- .map() the projectData to JSX  */
        filterListProjects.map(project => (
          <Project key={project.projectName} project={project} />
        ))}
        </div>
      </section>;
  }
}

export default FilterProjects