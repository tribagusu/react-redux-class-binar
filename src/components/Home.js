import React, { Component } from "react"
import { connect } from "react-redux"

class Home extends Component {
  render() {
    return <div>Home</div>
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  }
}

export default Home(mapStateToProps)(connect)
