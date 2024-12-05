import { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
    interface Request {
        date: string;
        title: string;
        description: string;
        link: string;
    }

    const [requests, setRequests] = useState<Request[]>([]);

    useEffect(() => {
        const fetchRequests = async () => {
            const today = new Date();
            const dates = [
                today.toISOString().split('T')[0],
                new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0],
                new Date(today.setDate(today.getDate() + 1)).toISOString().split('T')[0]
            ];

            try {
                const responses = await Promise.all(dates.map(date =>
                    axios.get(`http://localhost:5005/solicitudes/getByDate/${date}`)
                ));
                const allRequests = responses.flatMap(response => response.data);
                setRequests(allRequests);
            } catch (error) {
                console.error('There was an error fetching the data!', error);
            }
        };

        fetchRequests();
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                {requests.map((request, index) => (
                    <li key={index} className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{request.date}</time>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{request.title}</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{request.description}</p>
                        <a href={request.link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg></a>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Dashboard;