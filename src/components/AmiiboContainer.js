import React, { Component } from 'react'
import axios from 'axios'

export default class AmiiboContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    axios.get(`http://amiiboapi.com/api/amiibo`)
      .then(res => console.log(res.data))
  }
  render () {
    return (
      <div>
        Hello
      </div>
    )
  }
}
