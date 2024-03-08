// mutations.js
import { gql } from "@apollo/client";

export const REGISTER_ADMIN = gql`
  mutation RegisterAdmin($email: String!, $password: String!) {
    registerAdmin(input: { email: $email, password: $password }) {
      status
      message
      token
    }
  }
`;

export const ADMIN_LOGIN = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    adminLogin(input: { email: $email, password: $password }) {
      status
      message
      token
    }
  }
`;


export const CREATE_COUPON = gql`
  mutation createCoupon($code: String!, $percentage: Int!, $description: String!, $type: CouponType!, $status: CouponStatus!, $expiryDate: String!, $categories: [String]!) {
    createCoupon(input: { code: $code, percentage: $percentage, description: $description, type: $type, status: $status, expiryDate: $expiryDate, categories: $categories }) {
      status
      message
    }
  }
`;


export const GET_COUPONS = gql`
query{getActiveCoupons{
  status
  message
  coupons{
    code
    id
    percentage
    description
    status
  
  }
}}
`;

export const ADD_DEPARTMENT = gql`
  mutation addDepartment($name: String!,$description: String!,$permissions: [String]!) {
    addDepartment(input: { name: $name, description: $description, permissions: $permissions }) {
      status
      message
    }
  }
`;

export const GET_DEPARTMENT_USER_COUNT=gql`
query GetDepartmentUserCount($input:ID!){
  getDepartmentUserCount(input:$input){
  status
  message
  count
}}
`

export const GET_DEPARTMENT_USER=gql`
query GetDepartmentUsers($input:ID!){
  getDepartmentUsers(input:$input){
  status
  message
  users{
    id
    fullName
    contactNumber
    email
    walletBalance
    role
    currentAddress{
 			  id
        houseNumber
        aptOrBuildingName
        streetOrAreaName
        city
        state
        pincode
        label
    }
    department{
      id
      name
      description
      permissions
      
    }
  }
}}
`

export const GET_ADDED_DEPARTMENTS=gql`
query{getAddedDepartments{
  status
  message
  departments{
    id
    name
    description
    permissions
    creator{
      id
      fullName
      contactNumber
      email
      profilePicture
      walletBalance
      role
      currentAddress{
        id
        houseNumber
        aptOrBuildingName
        streetOrAreaName
        city
        state
        pincode
        label
      }
      department{
        id
        name
        description
        permissions
      }
    }
  }
}}
`

export const ADD_DEPARTMENT_USER=gql`
mutation addDepartment($fullName: String!,$contactNumber: String!,$email: String!,$profilePicture: String!,$role: String!,$departmentId: ID!) {
  addUser(input: { fullName: $fullName, contactNumber: $contactNumber, email: $email, profilePicture: $profilePicture, role: $role, departmentId: $departmentId }) {
    status
    message
  }
}

`

export const UPDATE_USER=gql`
  mutation updateUser($fullName: String!,$contactNumber: String!,$email: String!,$role: String!,$departmentId: ID!,$userId: ID!) {
    updateUser(input: { fullName: $fullName, contactNumber: $contactNumber, email: $email, role: $role, departmentId: $departmentId , userId: $userId }) {
      status
      message
    }
  }
`

export const DELETE_USER=gql`
  mutation deleteUser($userId: ID!) {
    deleteUser(input: { userId: $userId }) {
      status
      message
    }
  }
`

export const UPDATE_DEPARTMENT=gql`
  mutation updateDepartment($name: String!,$description: String!,$permissions: [String]!, $departmentId: String!) {
    updateDepartment(input: { name: $name, description: $description, permissions: $permissions, departmentId: $departmentId }) {
      status
      message
    }
  }
` 
export const DELETE_DEPARTMENT=gql`
  mutation deleteDepartment($departmentId: ID!) {
    deleteDepartment(input: { departmentId: $departmentId }) {
      status
      message
    }
  }
`
export const GET_USERS=gql`
query{getUsers{
  status
  message
  users{
    id
    fullName
    contactNumber
    email
    profilePicture
    walletBalance
    role
    currentAddress{
      id
      houseNumber
      aptOrBuildingName
      streetOrAreaName
      city
      state
      pincode
      label
    }
    department{
      id
      name
      description
      permissions
    }
  }
}}
`
export const ADD_PRODUCT_TO_CATEGORY = gql` 
  mutation AddNewProductToCategory($id: ID!, $input: AddNewProductInput!) {
    addNewProductToCategory(id: $id, input: $input) {
      status
      message
    }
  }
`;