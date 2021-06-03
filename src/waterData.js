const getRandomInt = () => {
    return 22
}
const getRandomUsed = () => {
    let min = 150;
    let max = 500;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(num)
}
const getRandomReplenished = () => {
    let min = 150;
    let max = 500;
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return String(num)
}

export const waterData = [
    { id: 'AP', state: 'Andhra Pradesh', value: getRandomInt(),used: getRandomUsed(), replenished: getRandomReplenished()  },
    { id: 'AR', state: 'Arunachal Pradesh', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'AS', state: 'Assam', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'BR', state: 'Bihar', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'CT', state: 'Chhattisgarh', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'GA', state: 'Goa', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'GJ', state: 'Gujarat', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'HR', state: 'Haryana', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'HP', state: 'Himachal Pradesh', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'JH', state: 'Jharkhand', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'KA', state: 'Karnataka', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'KL', state: 'Kerala', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'MP', state: 'Madhya Pradesh', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'MH', state: 'Maharashtra', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'MN', state: 'Manipur', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'ML', state: 'Meghalaya', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'MZ', state: 'Mizoram', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'NL', state: 'Nagaland', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'OD', state: 'Odisha', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'PB', state: 'Punjab', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'RJ', state: 'Rajasthan', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'SK', state: 'Sikkim', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'TN', state: 'Tamil Nadu', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'TS', state: 'Telangana', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'TR', state: 'Tripura', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'UK', state: 'Uttarakhand', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'UP', state: 'Uttar Pradesh', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'WB', state: 'West Bengal', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'WB', state: 'West Bengal', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'AN', state: 'Andaman and Nicobar Islands', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'CH', state: 'Chandigarh', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'DN', state: 'Dadra and Nagar Haveli', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'DD', state: 'Daman and Diu', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'DL', state: 'Delhi', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'JK', state: 'Jammu and Kashmir', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'LA', state: 'Ladakh', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'LD', state: 'Lakshadweep', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() },
    { id: 'PY', state: 'Puducherry', value: getRandomInt() , used: getRandomUsed(), replenished: getRandomReplenished() }
]

export const getStateData = (currentState) => {
    var result = waterData.find(obj => {
        return obj.id === currentState
    })
    console.log(result)
    return [result]
}