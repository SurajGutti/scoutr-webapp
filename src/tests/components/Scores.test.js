import { shallow } from "enzyme";
import { Scores } from "../../components/Scores";

test('testing Scores Component', () => {
   const setHomeScore = jest.fn();
   const setAwayScore = jest.fn();
   const scores = {
      homeScore: 60,
      awayScore: 30,
      setHomeScore: setHomeScore,
      setAwayScore: setAwayScore
   };
   const wrapper = shallow(<Scores scores={scores} />);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('#hScore').simulate('change', {
      target: {
         value: scores.homeScore
      }
   });
   wrapper.find('#aScore').simulate('change', {
      target: {
         value: scores.awayScore
      }
   })
});