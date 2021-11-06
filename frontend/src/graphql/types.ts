import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  createSubTask: SubTask;
  createTask: Task;
  deleteProject: Project;
  deleteSubTask: SubTask;
  deleteTask: Task;
  deleteUser?: Maybe<User>;
  login: Scalars['String'];
  registerUser: User;
  updateProject: Project;
  updateSubTask: SubTask;
  updateTask: Task;
};

export type MutationCreateProjectArgs = {
  data: ProjectCreateInput;
};

export type MutationCreateSubTaskArgs = {
  data: SubTaskCreateInput;
  taskId: Scalars['String'];
};

export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
  projectId: Scalars['String'];
};

export type MutationDeleteProjectArgs = {
  id: Scalars['String'];
};

export type MutationDeleteSubTaskArgs = {
  id: Scalars['String'];
};

export type MutationDeleteTaskArgs = {
  id: Scalars['String'];
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRegisterUserArgs = {
  data: UserRegisterInput;
};

export type MutationUpdateProjectArgs = {
  data: ProjectUpdateInput;
};

export type MutationUpdateSubTaskArgs = {
  data: SubTaskUpdateInput;
};

export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
};

export type PrivateUser = {
  __typename?: 'PrivateUser';
  count: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  password: Scalars['String'];
  role: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  tasks?: Maybe<Array<Task>>;
  userId: Scalars['ID'];
};

export type ProjectCreateInput = {
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type ProjectUpdateInput = {
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  info: Scalars['String'];
  projects: Array<Project>;
  subTasks: Array<SubTask>;
  tasks: Array<Task>;
  user?: Maybe<User>;
  users: Array<User>;
};

export type QuerySubTasksArgs = {
  taskId: Scalars['String'];
};

export type SubTask = {
  __typename?: 'SubTask';
  completed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  task?: Maybe<Task>;
  taskId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type SubTaskCreateInput = {
  completed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type SubTaskUpdateInput = {
  completed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  completed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  projectId: Scalars['ID'];
  userId: Scalars['ID'];
};

export type TaskCreateInput = {
  completed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
};

export type TaskUpdateInput = {
  completed?: Maybe<Scalars['Boolean']>;
  date?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  count: Scalars['Float'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  projects?: Maybe<Array<Project>>;
  role: Scalars['String'];
  subTasks?: Maybe<Array<SubTask>>;
  tasks?: Maybe<Array<Task>>;
};

export type UserRegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserUpdateInput = {
  count?: Maybe<Scalars['Float']>;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type InfoQueryQueryVariables = Exact<{ [key: string]: never; }>;

export type InfoQueryQuery = { __typename?: 'Query', info: string };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation', login: string };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
}>;

export type RegisterMutation = { __typename?: 'Mutation', registerUser: { __typename?: 'User', id: string, email: string, name: string } };

export const InfoQueryDocument = gql`
    query InfoQuery {
  info
}
    `

/**
 * __useInfoQueryQuery__
 *
 * To run a query within a React component, call `useInfoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useInfoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInfoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useInfoQueryQuery(baseOptions?: Apollo.QueryHookOptions<InfoQueryQuery, InfoQueryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<InfoQueryQuery, InfoQueryQueryVariables>(InfoQueryDocument, options)
}
export function useInfoQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InfoQueryQuery, InfoQueryQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<InfoQueryQuery, InfoQueryQueryVariables>(InfoQueryDocument, options)
}
export type InfoQueryQueryHookResult = ReturnType<typeof useInfoQueryQuery>;
export type InfoQueryLazyQueryHookResult = ReturnType<typeof useInfoQueryLazyQuery>;
export type InfoQueryQueryResult = Apollo.QueryResult<InfoQueryQuery, InfoQueryQueryVariables>;
export const LoginDocument = gql`
    mutation login($email: String!, $password: String!) {
  login(data: {email: $email, password: $password})
}
    `
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options)
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($email: String!, $password: String!, $name: String!) {
  registerUser(data: {email: $email, password: $password, name: $name}) {
    id
    email
    name
  }
}
    `
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options)
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
