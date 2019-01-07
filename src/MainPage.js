import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Shelf from './Shelf'

class MainPage extends Component{
    state = {
        currentlyReading : [
            // {
            //     title: 'The Hobbit',
            //     author: 'J.R.R. Tolkien',
            //     coverImage:  "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
            // },
            // {
            //     title: "Ender's Game",
            //     author: 'Orson Scott Card',
            //     coverImage:  "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
            // },
        ],
        wantToRead : [
            // {
            //     title: '1776',
            //     author: 'David McCullough',
            //     coverImage:  "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api"
            // },
            // {
            //     title: "Harry Potter and the Sorcerer's Stone",
            //     author: 'J.K. Rowling',
            //     coverImage:  "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api"
            // }
        ],
        read: [
            // {
            //     title: 'The Hobbit',
            //     author: 'J.R.R. Tolkien',
            //     coverImage:  "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api"
            // },
            // {
            //     title: 'The Adventures of Tom Sawyer',
            //     author: 'Mark Twain',
            //     coverImage:  "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api"
            // },
            // {
            //     title: "Oh, the Places You'll Go!",
            //     author: 'Seuss',
            //     coverImage:  "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api"
            // },
        ]
    }
    onMoveBook(e){
        console.log('main page moving book, e is', e)
    }
    render(){
        // const {currentlyReading, wantToRead, read} = this.state
        const {currentlyReading, wantToRead, read} = this.props
        console.log('mainpage books are ', currentlyReading, wantToRead, read)
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                    <h1>MyReads</h1>
                        <Link 
                        to='/search'
                        className = 'add-contact'
                        >
                            <div className="open-search">
                                <button >
                                </button>
                            </div>
                        </Link>
                        
                    </div>
                    <div className="list-books-content">
                    <div>
                        <Shelf
                            shelfName='currentlyReading'
                            books={currentlyReading}
                            onMoveBook = {(e) => this.onMoveBook(e)}
                        />
                        <Shelf
                            shelfName='wantToRead'
                            books={wantToRead}
                            onMoveBook = {(e) => this.onMoveBook(e)}
                        />    
                        <Shelf
                            shelfName='read'
                            books={read}
                            onMoveBook = {(e) => this.onMoveBook(e)}
                        />
                    </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default MainPage;