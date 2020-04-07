import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import Layout from '../components/Layout'
import initStore from '../redux/store'
import '../public/style/index.less'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx })
    }

    return { pageProps }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Head>
          <title>ReactJS Contact Form</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    )
  }
}

export default withRedux(initStore)(withReduxSaga(MyApp))
