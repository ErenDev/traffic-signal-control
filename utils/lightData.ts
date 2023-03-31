const lightScenario = [
  ['K', 'K'],
  ['Y', 'K'],
  ['S', 'K'],
  ['K', 'Y'],
  ['K', 'S'],
  ['K', 'K']
]

// export const lightData = (greenLightDuration) => {
//   return [{
//     'duration': 5000,
//     'step': 1,
//     'current': { 'group1': 'K', 'group2': 'K' },
//     'next': { 'group1': 'Y', 'group2': 'K' }
//   }, {
//     'duration': greenLightDuration,
//     'step': 2,
//     'current': { 'group1': 'Y', 'group2': 'K' },
//     'next': { 'group1': 'S', 'group2': 'K' }
//   }, {
//     'duration': 5000,
//     'step': 3,
//     'current': { 'group1': 'S', 'group2': 'K' },
//     'next': { 'group1': 'K', 'group2': 'Y' }
//   }, {
//     'duration': greenLightDuration,
//     'step': 4,
//     'current': { 'group1': 'K', 'group2': 'Y' },
//     'next': { 'group1': 'K', 'group2': 'S' }
//   }, {
//     'duration': 5000,
//     'step': 5,
//     'current': { 'group1': 'K', 'group2': 'S' },
//     'next': { 'group1': 'K', 'group2': 'K' }
//   }, {
//     'duration': 5000,
//     'step': 6,
//     'current': { 'group1': 'K', 'group2': 'K' },
//     'next': { 'group1': '', 'group2': '' }
//   }]
// }

export const lightData = (greenLightDuration) => {
  const lightObjArr = []

  lightScenario.forEach((item, index, arr) => {
    const group1 = item[0]
    const group2 = item[1]
    const nextLight = arr[index + 1]

    let obj = {
      duration: (group1 === 'Y' || group2 === 'Y') ? greenLightDuration : 5000,
      step: index + 1,
      current: {
        group1: item[0],
        group2: item[1],
        group3: 'K'
      },
      next: {
        group1: '',
        group2: '',
        group3: ''
      }
    }

    if (nextLight) {
      obj.next.group1 = nextLight[0]
      obj.next.group2 = nextLight[1]
    }

    lightObjArr.push(obj)
    })


  return lightObjArr
}