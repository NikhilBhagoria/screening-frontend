import React, { useEffect, useState } from "react"
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { BsClockHistory } from "react-icons/bs";
import { MdStars } from "react-icons/md";
const App = () => {
  const [appointments, setAppointments] = useState([]);
  const placeholderColours = ['green', 'red', 'gray', 'blue', 'yellow'];
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://gist.githubusercontent.com/telematum/7751eec667033ac8acd244542e464e18/raw/d4710c6fb54224a0bd316ecdc5246633aceefce5/todays.json");
      const data = await response.json();
      console.log("data", data.appointments);
      setAppointments(data.appointments);
    };

    fetchData();
  }, []);
  return (
    <>
      <div className='h-auto flex justify-center align-middle p-10'>
        <div className="w-full border-[1px] border-gray-200 border-solid rounded-3xl py-4 px-8 ">
          <p className='text-xl text-gray-500 font-semibold'>Today's Appointment List</p>
          <table className='my-5 w-full text-left table-auto text-sm rtl:text-right text-gray-500 rounded-2xl overflow-hidden'>
            <thead className='bg-gray-100'>
              <tr className='text-gray-400 text-sm'>
                <th className='py-5 pl-5 border-b-0 rounded-tl-3xl'>PATIENTS</th>
                <th className='py-5 pl-5'>DATE</th>
                <th className='py-5 pl-5'>TIME</th>
                <th className='py-5 pl-5'>DOCTOR</th>
                <th className='py-5 pl-5'>INJURY</th>
                <th className='py-5 pl-5 border-b-0 rounded-tr-3xl'>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment, index) => (
                <tr className='text-gray-500' key={index}>

                  <td className='py-4 pl-5 border-t flex items-center'>
                    <div className={`w-10 h-10 bg-${placeholderColours[Math.floor(Math.random() * placeholderColours.length)]}-200 flex justify-center `}>
                      <img className="rounded-full" src="./image/userProfile.jpg" alt="userProfile" />
                    </div>
                    <div className='px-2 w-auto h-10 flex flex-col'>
                      <p className='text-gray-800 font-semibold'>{appointment.patient_name}</p>
                      <p className='text-[0.84rem]'>{appointment.mobile_number}</p>
                    </div>
                  </td>

                  <td className='py-4 pl-5 border-t text-lg'>
                    <div className='flex flex-row items-center'>
                      <HiOutlineCalendarDays size={22} />
                      <p className='pl-2'>{appointment.appointment_date}</p>
                    </div>
                  </td>

                  <td className='py-4 pl-5 border-t text-lg'>
                    <div className='flex flex-row items-center'>
                      <BsClockHistory size={20} />
                      <p className='pl-2'>{appointment.appointment_time}</p>
                    </div>
                  </td>

                  <td className='py-4 pl-5 border-t text-lg'>
                    <div className='flex flex-row items-center'>
                      {/* <span className="rounded-full bg-orange-500 flex items-center"> */}
                      <MdStars size={25} color={`${index % 2 == 0 ? '#fab592' : '#66cb9f'}`} />
                      {/* </span> */}
                      <p className='pl-2'>{appointment.doctor}</p>
                    </div>
                  </td>

                  <td className='py-4 pl-5 border-t text-base'>
                    <div className='px-4 py-1 w-fit border rounded-lg bg-blue-100 font-semibold '>{appointment.injury}</div>
                  </td>

                  <td className='py-4 pl-5 border-t'>
                    <div className='flex flex-col w-fit pl-5'>
                      <div className='w-1.5 h-1.5 rounded-full border bg-gray-300 my-0.5'></div>
                      <div className='w-1.5 h-1.5 rounded-full border bg-gray-300 my-0.5'></div>
                      <div className='w-1.5 h-1.5 rounded-full border bg-gray-300 my-0.5'></div>
                    </div>
                  </td>

                </tr>
              ))}

            </tbody>
          </table>

        </div>
      </div>

    </>
  )
}

export default App
