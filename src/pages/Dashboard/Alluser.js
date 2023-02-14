import React from 'react';
import { FaArchive } from 'react-icons/fa';
import { useQuery } from 'react-query';
import Swal from 'sweetalert2';
import Loading from '../../Loading/Loading';

const Alluser = () => {
    const { data: allusers = [], isLoading,refetch } = useQuery({
        queryKey: ['guest'],
        queryFn: () =>
            fetch('https://cpi-project-server-ayakub.vercel.app/alluser')
                .then(res =>
                    res.json()
                )
    })
    const handleUpdate = (id) => {
        const permisson = window.confirm('are you sure ,Update Admin')
        if(permisson) {
            fetch(`https://cpi-project-server-ayakub.vercel.app/usersAll/admin/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'admin updated',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    refetch()
                }
            })
        }
    }
    const handleDelete =(id) => {
        const permisson = window.confirm('are you sure , delete user?')
        if(permisson) {
            fetch(`https://cpi-project-server-ayakub.vercel.app/alluser/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'user deleted',
                        showConfirmButton: false,
                        timer: 1500
                      })
                    refetch()
                }
            })
        }
    }
    
    if(isLoading){
        return <Loading />
    }
    return (
        <div className="overflow-x-auto">
  <table className="table table-zebra w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>role</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      
    {
                                allusers.map((users, i) => <tr key={users._id}>
                                    <td>{i + 1}</td>
                                    <td>{users.name}</td>
                                    <td>{users.email}</td>
                                    <td><button onClick={() => handleUpdate(users._id)} className="text-accent">{users.role}</button></td>
                                    <button title='delete user' onClick={()=> handleDelete(users._id)} className='text-2xl text-center'><FaArchive className='text-red-600'></FaArchive></button>
                                </tr>
                                )
                            }
      
     
      
      
    </tbody>
  </table>
</div>
    );
};

export default Alluser;