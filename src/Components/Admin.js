import React from "react";
import {
  useAddUserAccountMutation,
  useDeleteUserAccountMutation,
  useGetUserAccountQuery,
  useUpdateUserAccountMutation,
} from "../Api/adminSlice";

function Admin() {
  const { data, error, isLoading } = useGetUserAccountQuery();
  const [addUserAccount] = useAddUserAccountMutation();
  const [deleteUserAccount] = useDeleteUserAccountMutation();
  const [updateUserAccount] = useUpdateUserAccountMutation();
  //   data.map((account) => {
  //     console.log(account.id, account.ammount);
  //   })

  return (
    <>
      <div>Admin</div>
      <button
        onClick={() => {
          addUserAccount(101, data.length + 1);
        }}
      >
        Add User
      </button>

      <div>
        {data &&
          data.map((account) => (
            <p>
              {account.id} : {account.ammount}
              <button
                onClick={() => {
                  deleteUserAccount(account.id);
                }}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  updateUserAccount({id: account.id, ammount :  777});
                }}
              >
                Update
              </button>
            </p>
          ))}
      </div>
    </>
  );
}

export default Admin;
