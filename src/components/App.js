import React from 'react'
import {Router,Route} from 'react-router-dom'
import StreamList from './streams/StreamList'
import StreamEdit from './streams/StreamEdit'
import StreamCreate from './streams/StreamCreate'
import StreamShow from './streams/StreamShow'
import StreamDelete from './streams/StreamDelete'
import Header from './Header'
import history from '../history'

// Client id for oAuth :  125597652579-89rqv77bliff2d99bm7m6074v1qluf7u.apps.googleusercontent.com

const App = () => {
    return (
        <div className='ui container'>
    <div>
        <Router history={history}>
            <div>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/streams/new' exact component={StreamCreate} />
                <Route path='/streams/edit/:id' exact component={StreamEdit} />    
                <Route path='/streams/show' exact component={StreamShow} />
                <Route path='/streams/delete' exact component={StreamDelete} />
            </div>
        </Router>
    </div>
        </div>
    )
};

export default App ;