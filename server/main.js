//importing Meteor
import { Meteor } from 'meteor/meteor';
import { BaysCollection } from '../imports/api/bays';

function insertBay({ name, jobName, sort }) {
  BaysCollection.insert({ name, jobName, sort, createdAt: new Date()});
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
    insertBay({
      name: "Bay 5",
      jobName: '',
      sort: '5'
    });
    insertBay({
      name: "Bay 6",
      jobName: '',
      sort: '6'
    });
    insertBay({
      name: "Bay 7",
      jobName: '',
      sort: '7'
    });
    insertBay({
      name: "Bay 8",
      jobName: '',
      sort: '8'
    });
    insertBay({
      name: "Bay 9",
      jobName: '',
      sort: '9'
    });
    insertBay({
      name: "Bay 10",
      jobName: '',
      sort: '10'
    });
    insertBay({
      name: "Bay 11",
      jobName: '',
      sort: '11'
    });
    insertBay({
      name: "Bay 12",
      jobName: '',
      sort: '12'
    });
    insertBay({
      name: "Bay 13",
      jobName: '',
      sort: '13'
    });
    insertBay({
      name: "Bay 14",
      jobName: '',
      sort: '14'
    });
    insertBay({
      name: "Bay 15",
      jobName: '',
      sort: '15'
    });
    insertBay({
      name: "Bay BP1",
      jobName: '',
      sort: '16'
    });
    insertBay({
      name: "Bay CR",
      jobName: '',
      sort: '17'
    });
    insertBay({
      name: "Bay F1",
      jobName: '',
      sort: '18'
    });
    insertBay({
      name: "Bay F2",
      jobName: '',
      sort: '19'
    });
    insertBay({
      name: "Bay F3 ",
      jobName: '',
      sort: '20'
    });
    insertBay({
      name: "Bay F4",
      jobName: '',
      sort: '21'
    });
    insertBay({
      name: "Bay F5",
      jobName: '',
      sort: '22'
    });
    insertBay({
      name: "Bay F6",
      jobName: '',
      sort: '23'
    });

  }
});
