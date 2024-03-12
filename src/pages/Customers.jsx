import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import SearchIcon from '../assets/searchIcon.svg';
import previous from '../assets/Previous.svg';
import next from '../assets/Next.svg';
import { GET_USERS } from '../context/mutation';
import Pagination from '@material-ui/lab/Pagination';
import Skeleton from '@material-ui/lab/Skeleton';

export default function Customers() {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(10);
    const [searchInput, setSearchInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const { loading, error, data } = useQuery(GET_USERS);

    useEffect(() => {
        if (data) {
            const filteredUsers = data.getUsers.users.filter(item => item.role === "USER");
            setUsers(filteredUsers);
            setFilteredUsers(filteredUsers);
        }
    }, [data]);

    const handleSearch = (e) => {
        console.log(e.target.value);
        const value = e?.target?.value?.toLowerCase();
        setSearchInput(value);
        const filteredData = users.filter(user => user.fullName?.toLowerCase().includes(value) || user?.email?.toLowerCase().includes(value) || (user.currentAddress && user.currentAddress.pincode.includes(value)));
        setFilteredUsers(filteredData);
    };

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='p-[48px] bg-white w-full'>
            <div className='flex justify-between w-full mb-[48px]'>
                {loading ? (
                    <Skeleton variant="rect" width={300} height={40} />
                ) : (
                    <h1 className='font-HelveticaNeueBold font-[700] text-[24px] tracking-[0.552px] leading-[30px] '>Customers</h1>
                )}
                <div className="flex md:flex-row flex-col md:gap-4 gap-2 ">
                    {/* searchbar */}
                    <div className="flex items-center md:w-[442px] rounded border border-[#CBD5E1] bg-white px-2">
                        {loading ? (
                            <Skeleton variant="rect" width={300} height={40} />
                        ) : (
                            <div className="md:p-2 p-1 flex gap-2 items-center w-full">
                                <img src={SearchIcon} alt="search icon" className="w-6 h-6" />
                                <input
                                    type="text"
                                    placeholder="Search By Name, email or pincode"
                                    className="placeholder:text-[#94A3B8] md:text-sm text-xs focus:outline-none w-full"
                                    value={searchInput}
                                    onChange={(e)=>handleSearch(e)}
                                />
                            </div>
                        )}
                    </div>
                    {/* add user button */}
                    <Link
                        style={{cursor:"not-allowed"}}
                        className="md:text-base text-sm align-middle text-center md:w-[15.5rem] rounded md:py-3 py-2 px-4 bg-[#031B89] text-white"
                    >
                        {loading ? (
                            <Skeleton variant="rect" width={150} height={40} />
                        ) : (
                            "+ Add a customer"
                        )}
                    </Link>
                </div>
            </div>
            <div>
            <div className='flex gap-[32px]'>
               
                <div className='flex items-center gap-[8px]'>
                    {loading ? (
                        <Skeleton variant="rect" width={150} height={40} />
                    ) : (
                        <p className="text-slate-500 font-helvetica-neue text-[12px] font-normal leading-3">Date created: </p>
                    )}
                    <div className='text-[#7487FF] bg-[#F8FAFC] px-[12px] py-[8px] rounded-3xl'>
                        {loading ? (
                            <Skeleton variant="rect" width={150} height={40} />
                        ) : (
                            <input type="date" className="bg-transparent outline-none" />
                        )}
                    </div>
                </div>
            </div>
        </div>
            <p className='text-[16px] font-[500] leading-[20px] tracking-[0.36px] my-[16px]'>Your customers</p>
            <div className='w-full border border-[#E2E8F0] rounded-[8px]'>
                <div className='flex justify-between text-[#64748B] text-[14px] font-[500] leading-[17.5px] italic  bg-[#FAFAFA] px-[48px] py-[24px] rounded-t-[8px] border-b border-[#E2E8F0]'>
                    <p className='flex-1 text-left'>Name</p>
                    <p className='flex-1 text-left'>Phone Number</p>
                    <p className='flex-1 text-left'>Email</p>
                    <p className='flex-1 text-left'>Pincode</p>
                    <p className='flex-1 text-left'>Date created</p>
                </div>
                <div className='w-full'>
                    {loading ? (
                        <Skeleton variant="rect" width="100%" height={200} />
                    ) : (
                        currentUsers.map(item => (
                            <div className='cursor-pointer flex justify-between text-[#334155] text-[14px] font-[500] leading-[17.5px] px-[48px] py-[24px] border-t border-[#E2E8F0] hover:bg-[#DBEAFE]' key={item.id} onClick={() => navigate('/home/customer_profile', { state: { userDetails: item } })}>
                                <p className='flex-1 text-left'>{item.fullName || '--'}</p>
                                <p className='flex-1 text-left'>{item.contactNumber || '--'}</p>
                                <p className='flex-1 text-left'>{item.email || '--'}</p>
                                <p className='flex-1 text-left'>{item.currentAddress ? item.currentAddress.pincode : 'xxxxxx'}</p>
                                <p className='flex-1 text-left'>{item.createdAt || '--'}</p>
                            </div>
                        ))
                    )}
                    {!loading && !currentUsers?.length && <p className='text-center text-[#94A3B8] font-[400] text-[16px] leading-[19.5px] py-[24px]'>No customers found</p>}
                </div>
            </div>
            {!loading && (
                <div className='flex justify-center items-center gap-[12px] font-HelveticaNeue mt-[12px]'>
                    <Pagination count={Math.ceil(filteredUsers.length / usersPerPage)} page={currentPage} onChange={handleChangePage} color="primary" />
                </div>
            )}
        </div>
    );
}
