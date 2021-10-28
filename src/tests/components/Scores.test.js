import { shallow } from 'enzyme';
import { Scores } from "../../components/Scores";

test('testing Scores Component', () => {
   const setHomeScore = jest.fn();
   const scores = {
      homeScore: 60,
      awaScore: 30,
      setHomeScore: setHomeScore,
      setAwayScore: ''
   };
   const wrapper = shallow(<Scores scores={scores} />);
   expect(wrapper).toMatchSnapshot();
   wrapper.find('#hScore').simulate('change', {
      target: {
         value:  scores.homeScore
      }
   });
});