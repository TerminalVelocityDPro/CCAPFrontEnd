import { Store } from "./main";
import { Data } from "../interfaces";

// Stores all of the data that's actually represented
// in a way that can be accessed by all of the components.
class DataStore extends Store<Data> {
  protected data(): Data {
    // Initial Data
    return {
      totalCnt: 0,
      stressPercents: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      struggleCnts: {
        covid: 0,
        family: 0,
        friends: 0,
        learning: 0,
        overall: 0
      },
      covidCnts: {
        fear: 0,
        worriedOthers: 0,
        worriedSelf: 0,
        job: 0
      },
      protectCnt: 0,
      statsCnt: 0,
      familyCnts: {
        divorce: 0,
        illness: 0,
        moving: 0,
        finance: 0
      },
      houseCnt: 8,
      friendCnts: {
        conflict: 0,
        nervousness: 0,
        communication: 0,
        kit: 0
      },
      socialCnt: 0,
      schoolCnts: {
        internet: 0,
        difficulty: 0,
        accessibility: 0,
        distractions: 0
      },
      techCnt: 0,
      tutorCnt: 0,
      focusCnt: 0,
      counselingCnt: 0,
      transitionCnt: 0
    };
  }

  // Update the store
  update(data: Data) {
    this.state = data;
  }
}

// Export singleton class used for managing state
export const dataStore: DataStore = new DataStore();
