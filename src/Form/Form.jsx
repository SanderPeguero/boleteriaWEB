import { useState } from 'react'
import axios from 'axios'
import UrlApi from '../globals';

function Form() {

    const [Id, setId] = useState(null);
    const [Name, setName] = useState(null);
    const [Date, setDate] = useState(null);
    const [Image, setImage] = useState(null);
    const [TotalTickets, setTotalTickets] = useState(null);
    const [TicketsSold, setTicketsSold] = useState(null);
    const [VIPTickets, setVIPTickets] = useState(null);
    const [VIPTicketsPrice, setVIPTicketsPrice] = useState(null);
    const [RegularTickets, setRegularTickets] = useState(null);
    const [RegularTicketsPrice, setRegularTicketsPrice] = useState(null);
    const [SpecialGuestTickets, setSpecialGuestTickets] = useState(null);
    const [SpecialGuestTicketsPrice, setSpecialGuestTicketsPrice] = useState(null);
    const [GuestTickets, setGuestTickets] = useState(null);


    const CreateDataHandler = () => {
        let objData = {
            Id: Id,
            Name: Name,
            Date: Date,
            Image: Image,
            TotalTickets: TotalTickets,
            TicketsSold: TicketsSold,
            VIPTickets: VIPTickets,
            VIPTicketsPrice: VIPTicketsPrice,
            RegularTickets: RegularTickets,
            RegularTicketsPrice: RegularTicketsPrice,
            SpecialGuestTickets: SpecialGuestTickets,
            SpecialGuestTicketsPrice: SpecialGuestTicketsPrice,
            GuestTickets: GuestTickets
        };

        axios.post(UrlApi + "/events", objData)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            });

    }

    return (
        <div className="flex justify-center">
            <div className="flex flex-col w-[400px] rounded-xl border py-4 px-2 m-2">
                <div className='flex justify-center text-[1.5rem]'>Crear Evento</div>
                {/* <input type="number" placeholder="Id" className="input max-w-xs m-1" onChange={(e) => { setId(e.target.value) }} /> */}
                <input type="text" placeholder="Name" className="input max-w-xs m-1" onChange={(e) => { setName(e.target.value) }} />
                <input type="date" placeholder="Date" className="input max-w-xs m-1" onChange={(e) => { setDate(e.target.value) }} />
                <input type="text" placeholder="Image" className="input max-w-xs m-1" onChange={(e) => { setImage(e.target.value) }} />
                <input type="text"readOnly placeholder="Total Tickets" className="input max-w-xs m-1" onChange={(e) => { setTotalTickets(e.target.value) }} />
                {/* <input type="text" readOnly placeholder="Tickets Sold" className="input max-w-xs m-1" onChange={(e) => { setTicketsSold(e.target.value) }} /> */}
                <input type="number" placeholder="VIP Tickets" className="input max-w-xs m-1" onChange={(e) => { setVIPTickets(e.target.value) }} />
                <input type="number" placeholder="VIP Tickets Price" className="input max-w-xs m-1" onChange={(e) => { setVIPTicketsPrice(e.target.value) }} />
                <input type="number" placeholder="Regular Tickets" className="input max-w-xs m-1" onChange={(e) => { setRegularTickets(e.target.value) }} />
                <input type="number" placeholder="Regular Tickets Price" className="input max-w-xs m-1" onChange={(e) => { setRegularTicketsPrice(e.target.value) }} />
                <input type="number" placeholder="Special Guest Tickets" className="input max-w-xs m-1" onChange={(e) => { setSpecialGuestTickets(e.target.value) }} />
                <input type="number" placeholder="Special Guest TicketsPrice" className="input max-w-xs m-1" onChange={(e) => { setSpecialGuestTicketsPrice(e.target.value) }} />
                <input type="number" placeholder="Guest Tickets" className="input max-w-xs m-1" onChange={(e) => { setGuestTickets(e.target.value) }} />
                <button className="btn m-1" onClick={CreateDataHandler}>Create</button>
            </div>
        </div>
    )
}

export default Form