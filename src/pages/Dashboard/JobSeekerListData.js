import React from 'react';

const JobSeekerListData = ({data}) => {
    const {name,email,session,}=data;
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Session</th>
              <th>Cv</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>{name}</td>
              <td>{email}</td>
              <td>{session}</td>
              <td><button className='btn btn-gohst'>Download</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
};

export default JobSeekerListData;