
import React from 'react'
import Header from './../components/Header/Header'
import Menu from './../components/Menu/Menu'
import Footer from './../components/Footer/Footer'

const MainLayout = (props) => {
return (
<div >

<Header />
<Menu />

    {props.children}

<Footer />

</div>
)


}

export default MainLayout