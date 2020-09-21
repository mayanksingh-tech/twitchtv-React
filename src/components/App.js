import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'

// Client id for oAuth :  125597652579-89rqv77bliff2d99bm7m6074v1qluf7u.apps.googleusercontent.com

const App = () => {
    return (
        <div className='ui container'>
    <div>
        <BrowserRouter>
            <div>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit' exact component={StreamEdit} />
                <Route path='/streams/show' exact component={StreamShow} />
                <Route path='/streams/delete' exact component={StreamDelete} />
            </div>
        </BrowserRouter>
    </div>
        </div>
    )
};

export default App ;