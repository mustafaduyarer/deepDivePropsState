import React, {Component} from "react";
import { JournalEntry } from "./journal_entry";

const rawJournalData = [
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post two', content: 'Post content', status: 'published' },
    { title: 'Post three', content: 'Post content', status: 'published' },
    { title: 'Post four', content: 'Post content', status: 'published' },
] 

// const JournalEntry = () => { 
//     return(
//       <div>
//         <h1>Hi Mustafa</h1>
//         <p>Some amazing content</p>
//       </div>
//     );
// };

// const JournalEntry = props => {
//     return(
//       <div>
//         <h1>{props.title}</h1>
//         <p>{props.content}</p>
//       </div>
//     );
// };

//Class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state= {
            journalData: rawJournalData,
            greeting:"hi there",
            isOpen: true
        };
    }

    clearEntries = () => {
        this.setState({ journalData: [], isOpen: false });
      };
    
      showAllEntries = () => {
        this.setState({ journalData: rawJournalData, isOpen: true });
      };
    
      toggleStatus = () => {
        if (this.state.isOpen) {
          this.setState({ journalData: [], isOpen: false });
        } else {
          this.setState({ journalData: rawJournalData, isOpen: true });
        }
      };

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return (
              <div key={journalEntry.title}>
                <JournalEntry
                  title={journalEntry.title}
                  content={journalEntry.content}
                />
              </div>
            );
          });


      return (
       <div>
         <h1>{this.props.heading}</h1>
        
         {journalEntries}
         <button onClick={this.clearEntries}>Clear Journal Entries</button>
         <button onClick={this.showAllEntries}>Show All Entries</button>
         <button onClick={this.toggleStatus}>Toggle Entries</button>
        
       </div>
      
      );
    }

  }