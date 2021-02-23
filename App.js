import React , {useState} from 'react';
import { StyleSheet, View  ,Button  ,FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
  const [courseGoals , setCourseGoals] = useState([]);
  const [show ,setShow] = useState(false)

  const addGoalHandler = (goal)=>{
    setCourseGoals(currentGoals => [...currentGoals ,
                       {id :Math.random().toString() , value : goal }])
    setShow(false)                   
  }

  const deleteGoalHandler =(goalId)=>{
      setCourseGoals(currentGoals=>{
        return currentGoals.filter(goal => goal.id !== goalId)
      })
  }

  const cancelGoalAddHandler =()=>{
    setShow(false)
  }

  return (
    <View  style ={styles.screen}>
      <Button title='Add New Goal' onPress={()=> setShow(true)}/>
      <GoalInput addGoal={addGoalHandler} visible={show} onCancel={cancelGoalAddHandler} />
      <FlatList
        data={courseGoals}
        renderItem={itemData=><GoalItem 
                                title={itemData.item.value}
                                onDelete={deleteGoalHandler}
                                id={itemData.item.id}/>}/>   
    </View>
  );
}

const styles = StyleSheet.create({
   screen : {
    padding :50
   } ,
   
});
