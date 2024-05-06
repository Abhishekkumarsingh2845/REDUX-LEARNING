import { View, Text } from 'react-native'
import React from 'react'
import {useSelector}  from 'react-redux';

const Header = () => {
  const cardData= useSelector((state)=> state.reducer);
  const [cardItems,setCardItems] = useState(0);
  useEffect(()=>{
    setCardItems(cardData.length)
  }, [cardData])
  return (
    <View>
      <Text>COUNT:0</Text>
    </View>
  )
}

export default Header