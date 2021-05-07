import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { BaysCollection } from '../api/bays';
import Clock from 'react-live-clock';
import SingleBay from './components/SingleBay';

const BayAdmin = () => {

    const bays = useTracker(() => BaysCollection.find({}).fetch());
    console.log(bays);

    const allBays = bays.map(item => {
        // var itemsObject = item.list;
        // var listItems = [];
        // for (var key in itemsObject) {
        //     listItems.push({
        //         key: key,
        //         item: itemsObject[key].item,
        //         grabbed: itemsObject[key].grabbed,
        //         received: itemsObject[key].received,
        //         starred: itemsObject[key].starred,
        //         count: itemsObject[key].count
        //     })
        //}
        return <SingleBay
            key={item.bay}
            sort={item.sort}
            jobName={item.jobName}
            techName={item.techName}
            // listItems={listItems}
            bay={item._id}
            // listLength={listItems.length}
            qr={item.qr}
        />
    });
    console.log(allBays)




        return (
            <div className='app' >
                <header>
                    <div className='wrapper'>
                        <img className="baywatchlogo" src="https://vignette.wikia.nocookie.net/logopedia/images/b/b1/Baywatch_logo.png/revision/latest?cb=20131017020359" alt="baywatch logo"></img>

                    </div>

                </header>
                <div className='container'>
                    <div className='allBays'>
                       {allBays}
                    </div>
                </div>
                <div className="footer-time">
                    <Clock format={'dddd, MMMM Do YYYY HH:mm'} ticking={true} timezone={'America/New_York'} />
                </div>

            </div>
        );
}
export default BayAdmin;