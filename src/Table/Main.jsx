import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from './Table'
import axios from 'axios';
import UrlApi from '../globals';

// function Main() {

//     const [data, setdata] = useState([]);

//     const PullDataHandler = () => {
//         // setdata(data.push(main()))

//         axios.get(UrlApi + "/events")
//             .then(response => {

//                 setdata(response.data)

//             }).catch(err => {
//                 // swal({
//                 //   title: "Not Server Connection!",
//                 //   text: "Products can’t be search!",
//                 //   icon: "error",
//                 //   button: "Ok"
//                 // })
//                 console.log(err)
//             })


//     }
//     return (
//         <div className="flex justify-center m-12">
//             <div className=" min-w-full rounded-xl border py-4 px-2 m-2">
//                 <Table data={data} />
//                 <button className="btn m-1" onClick={PullDataHandler}>Pull Data</button>
//             </div>
//         </div>
//     )
// }


function Main(){

    const navigate = useNavigate()

    const handleNavigate = (event) => {
        navigate(`/campaign-details/${event.Name}`, { state: event })
    }
    
    const [data, setdata] = useState([]);

    const PullDataHandler = () => {
        // setdata(data.push(main()))

        axios.get(UrlApi + "/events")
        .then(response => {

            setdata(response.data)

        }).catch(err => {
            // swal({
            //   title: "Not Server Connection!",
            //   text: "Products can’t be search!",
            //   icon: "error",
            //   button: "Ok"
            // })
            console.log(err)
        })
    }

    useEffect(() => {
        axios.get(UrlApi + "/events")
        .then(response => {

            setdata(response.data)
            console.log(response.data)

        }).catch(err => {
            // swal({
            //   title: "Not Server Connection!",
            //   text: "Products can’t be search!",
            //   icon: "error",
            //   button: "Ok"
            // })
            console.log(err)
        })
    }, []);

    return(
        <div className='m-10'>
            <h1 className='font-epilogue font-semibold text-[18px] text-white text-left'>
                {/* {data.Name} */}
                {/* ({data.length}) */}
            </h1>
            <div className='flex flex-wrap mt-[20px] gap-[26px]'>
                {/* {isLoading && (
                    <img src={loader} alt="loader" className='w-[100px] object-contain' />
                )} */}

                {/* {!isLoading && campaigns.length === 0 && ( */}
                {/* <p className='font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]'>
                    You have not created any campaigns yet
                </p> */}
                {/* )} */}

                {data.length > 0 && data.map((event) => 
                    <FundCard
                        key={event.Id}
                        {...event}
                        handleClick={() => handleNavigate(event)}
                    />
                )}
            </div>
        </div>
    )
}



const FundCard = ({ Name, Date, Image, TotalTickets, TicketsSold, VIPTickets, VIPTicketsPrice, RegularTickets, RegularTicketsPrice, SpecialGuestTickets, SpecialGuestTicketsPrice, GuestTickets, handleClick }) => {

    // const [remainingDays, setremainingDays] = useState(daysLeft(deadline));
    
    // const MINUTE_MS = 5000;

    // useEffect(() => {

    //     const interval = setInterval(() => {
    //         setremainingDays(daysLeft(deadline))
    //     }, MINUTE_MS);


    //     // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    //     return () => clearInterval(interval); 

    // }, [])

    return(
        <div 
        className='sm:w-[288px] w-full rounded-[15px] bg-[#1c1c24] cursor-pointer' onClick={handleClick}
        >
            <img src={Image} alt="fund" className='w-full h-[500px] object-cover rounded-[15px]' />

            <div className='flex flex-col p-4'>
                <div className='flex flex-row items-center mb-[18px]'>
                    {/* <img src={tagType} alt="tag" className='w-[17px] h-[17px] object-contain' /> */}
                    <p className='ml-[12px] mt-[2px] font-epilogue font-medium text-[12px] text-[#808191]'>
                        {Date}
                    </p>
                </div>

                <div className='block'>
                    <h3 className='font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate'>
                        {Name}
                    </h3>
                    <p className='mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[18px] truncate'>
                        {RegularTickets} Tickets Left
                    </p>
                </div>

                <div className='flex justify-between flex-wrap mt-[15px] gap-2'>
                    <div className='flex flex-col'>
                        <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>
                            {/* {amountCollected} */}
                        </h4>
                        <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate'>
                          {TicketsSold} Tickets Sold  
                        </p>
                    </div>

                    <div className='flex flex-col'>
                        <h4 className='font-epilogue font-semibold text-[14px] text-[#b2b3bd] leading-[22px]'>
                            {/* {remainingDays} */}
                        </h4>
                        <p className='mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-[#808191] sm:max-w-[120px] truncate'>
                            Days Left
                        </p>
                    </div>
                </div>

                <div className='flex items-center mt-[20px] gap-[12px]'>
                    {/* <div className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-[#13131a]'>
                        <img src={thirdweb} alt="user" className='w-1/2 h-1/2 object-contain' />
                    </div> */}

                    <p className='flex-1 font-epilogue font-normal text-[12px] text-[#808191] truncate'>
                        by <span className='text-[#b2b3bd]'>PegueroAffirm</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main