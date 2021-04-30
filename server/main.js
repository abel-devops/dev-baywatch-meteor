//importing Meteor
import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { BaysCollection } from '../imports/api/bays';


function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

function insertBay({ name, jobName, sort }) {
  BaysCollection.insert({name, jobName, sort, createdAt: new Date()});
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (BaysCollection.find().count() === 0) {
    insertBay({
      name: "Bay 1",
      jobName: '',
      sort: '1'
    });
    insertBay({
      name: "Bay 2",
      jobName: '',
      sort: '2'
    });
    insertBay({
      name: "Bay 3",
      jobName: '',
      sort: '3'
    });
    insertBay({
      name: "Bay 4",
      jobName: '',
      sort: '4'
    });

  }
});
