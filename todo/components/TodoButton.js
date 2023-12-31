import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, StyleSheet } from 'react-native'

const TodoButton = ({ onPress, isDone, name }) => (
  <TouchableHighlight
    onPress={onPress}
    underlayColor='#efefef'
    style={styles.button}>
    <Text style={[
      styles.text,
      isDone ? styles.isDone : null,
      name === 'Delete' ? styles.deleteButton : null
    ]}
    >
      {name}
    </Text>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    padding: 7,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
    marginRight: 5
  },
  text: {
    color: '#666666'
  },
  isDone: {
    color: 'green',
    fontWeight: 'bold'
  },
  deleteButton: {
    color: 'rgba(175, 47, 47, 1)'
  }
})

TodoButton.propTypes = {
  onPress: PropTypes.func,
  isDone: PropTypes.bool,
  name: PropTypes.string
}

export default TodoButton
