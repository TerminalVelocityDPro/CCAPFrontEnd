/**
 * The interface that represents the data being visualized on the dashboard.
 * @param {number} totalCnt - The total number of people who have taken the survey
 * @param {Array<number>} stressPercents - An array containing the percentage of people who marked each of the options for stress (1-10) in order
 * @param {StruggleCnts} struggleCnts - A record containing the number of people who marked each of the five options describing their struggle
 * @param {CovidCnts} covidCnts - A record contianing the number of people who marked each of the options about their covid experience
 * @param {number} protectCnt - The number of people who opted to view the information on how to protect themselves from COVID-19
 * @param {number} statsCnt - The number of people who opted to view statistics about COVID-19
 * @param {FamilyCnts} familyCnts - A record containing the number of people who marked each of the options about their family experience
 * @param {number} houseCnt - The number of people who opted to view information on how to keep their house clean
 * @param {FriendsCnts} friendsCnts - A record containing the number of people who marked each of the options about their friends experience
 * @param {number} socialCnt - The number of people who opted to view advice about remaining social during quarantine
 * @param {SchoolCnts} schoolCnts - A record containing the number of people who marked each of the options about their friends experience
 * @param {number} techCnt - The number of people who opted to view information on how to reach out for tech help
 * @param {number} tutorCnt - The number of people who opted to view informaion on how to reach out to a tutor
 * @param {number} focusCnt - The number of people who opted to view advice on focusing during quarantine
 * @param {number} counselingCnt - The number of people who opted to view information on how to reach out to the peer counseling team
 * @param {number} transitionCnt - The number of people who opted to view information on how to reach out to the transition team
 */
export interface Data extends Record<string, any> {
  totalCnt: number;
  stressPercents: Array<number>;
  struggleCnts: StruggleCnts;
  covidCnts: CovidCnts;
  protectCnt: number;
  statsCnt: number;
  familyCnts: FamilyCnts;
  houseCnt: number;
  friendCnts: FriendsCnts;
  socialCnt: number;
  schoolCnts: SchoolCnts;
  techCnt: number;
  tutorCnt: number;
  focusCnt: number;
  counselingCnt: number;
  transitionCnt: number;
}

/**
 * Repersents the struggles that people are going through.
 * @param {number} covid - The number of people who chose covid as thier main struggle
 * @param {number} family - The number of people who chose family problems as their main struggle
 * @param {number} friends - The number of people who chose friend problems as their main struggle
 * @param {number} learning - The number of people who chose distance learning problems as their main struggle
 * @param {number} overall - The number of people who chose overall wellness as their main struggle
 */
interface StruggleCnts extends Record<string, any> {
  covid: number;
  family: number;
  friends: number;
  learning: number;
  overall: number;
}

/**
 * Represents the isseus that people who chose covid reported
 * @param {number} fear - The number of people who chose fear as one of their issues
 * @param {number} worriedOthers - The number of people who chose concern over the wellness of friends/family as one of their issues
 * @param {number} worriedSelf - The number of people who chose concern over their own health as one of their issues
 * @param {number} job - The number of people who chose concern over the inability of themselves or their family members to work as one of their issues
 */
interface CovidCnts extends Record<string, any> {
  fear: number;
  worriedOthers: number;
  worriedSelf: number;
  job: number;
}

/**
 * Represents the isseus that people who chose family reported
 * @param {number} divorce - The number of people who chose divorce or seperation as one of their issues
 * @param {number} illness - The number of people who chose family illness as one of their issues
 * @param {number} moving - The number of people who chose moving as one of their issues
 * @param {number} finance - The number of people who chose their current financial situation as one of their issues
 */
interface FamilyCnts extends Record<string, any> {
  divorce: number;
  illness: number;
  moving: number;
  finance: number;
}
/**
 * Represents the isseus that people who chose friends reported
 * @param {number} conflict - The number of people who chose conflict between friends as one of their issues
 * @param {number} nervousness - The number of people who chose nervousness in making new friends as one of their issues
 * @param {number} communication - The number of people who chose communication difficulties as one of their issues
 * @param {number} kit - The number of people who chose issues with keeping in touch online as one of their issues
 */
interface FriendsCnts extends Record<string, any> {
  conflict: number;
  nervousness: number;
  communication: number;
  kit: number;
}
/**
 * Represents the isseus that people who chose school reported
 * @param {number} internet - The number of people who chose inconsistent internet as one of their issues
 * @param {number} difficulty - The number of people who chose course difficulty as one of their issues
 * @param {number} accessibility - The number of people who chose technology accessibility as one of their issues
 * @param {number} distractions - The number of people who chose distractions at home as one of their issues
 */
interface SchoolCnts extends Record<string, any> {
  internet: number;
  difficulty: number;
  accessibility: number;
  distractions: number;
}
