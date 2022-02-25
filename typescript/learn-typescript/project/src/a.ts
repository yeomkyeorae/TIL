interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//   name: 'capt',
//   skill: 'shield',
// };

// const capt: Hero = {};

// 타입 단언을 사용하면 타입 오류에 대한 메세지를 알 수 없다. + non-assertion
// 따라서 주의해서 사용해야 한다.
// const capt = {} as Hero;
// capt.name = 'capt';
// capt.skill = 'shield';
