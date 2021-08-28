import gql from 'graphql-tag'
import * as VueApolloComposable from '@vue/apollo-composable'
import * as VueCompositionApi from '@vue/composition-api'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
export type ReactiveFunction<TParam> = () => TParam
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  DateTime: any
}

export type Node = {
  id: Scalars['ID']
}

export type User = Node & {
  __typename?: 'User'
  id: Scalars['ID']
  name: Scalars['String']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type Thread = Node & {
  __typename?: 'Thread'
  id: Scalars['ID']
  title: Scalars['String']
  closed: Scalars['Boolean']
  createdAt: Scalars['DateTime']
  updatedAt: Scalars['DateTime']
}

export type GetThreadsInput = {
  closed?: Maybe<Scalars['Boolean']>
  size?: Maybe<Scalars['Int']>
  from?: Maybe<Scalars['Int']>
  word?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  node: Node
  threads: Array<Thread>
}

export type QueryNodeArgs = {
  id: Scalars['ID']
}

export type QueryThreadsArgs = {
  input: GetThreadsInput
}

export type NewThread = {
  title: Scalars['String']
}

export type OpenThread = {
  threadID: Scalars['ID']
}

export type CloseThread = {
  threadID: Scalars['ID']
}

export type Mutation = {
  __typename?: 'Mutation'
  createThread: Thread
  openThread: Thread
  closeThread: Thread
}

export type MutationCreateThreadArgs = {
  input: NewThread
}

export type MutationOpenThreadArgs = {
  input: OpenThread
}

export type MutationCloseThreadArgs = {
  input: CloseThread
}

export type CreateThreadMutationVariables = Exact<{
  title: Scalars['String']
}>

export type CreateThreadMutation = { __typename?: 'Mutation' } & {
  createThread: { __typename?: 'Thread' } & Pick<
    Thread,
    'title' | 'closed' | 'updatedAt' | 'id'
  >
}

export type OpenThreadMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type OpenThreadMutation = { __typename?: 'Mutation' } & {
  openThread: { __typename?: 'Thread' } & Pick<
    Thread,
    'title' | 'closed' | 'updatedAt' | 'id'
  >
}

export type CloseThreadMutationVariables = Exact<{
  id: Scalars['ID']
}>

export type CloseThreadMutation = { __typename?: 'Mutation' } & {
  closeThread: { __typename?: 'Thread' } & Pick<
    Thread,
    'title' | 'closed' | 'updatedAt' | 'id'
  >
}

export type ThreadsQueryVariables = Exact<{
  closed?: Maybe<Scalars['Boolean']>
  size?: Maybe<Scalars['Int']>
  from?: Maybe<Scalars['Int']>
  word?: Maybe<Scalars['String']>
}>

export type ThreadsQuery = { __typename?: 'Query' } & {
  threads: Array<
    { __typename?: 'Thread' } & Pick<
      Thread,
      'id' | 'title' | 'createdAt' | 'updatedAt' | 'closed'
    >
  >
}

export const CreateThreadDocument = gql`
  mutation createThread($title: String!) {
    createThread(input: { title: $title }) {
      title
      closed
      updatedAt
      id
    }
  }
`

/**
 * __useCreateThreadMutation__
 *
 * To run a mutation, you first call `useCreateThreadMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateThreadMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateThreadMutation({
 *   variables: {
 *     title: // value for 'title'
 *   },
 * });
 */
export function useCreateThreadMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateThreadMutation,
        CreateThreadMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateThreadMutation,
          CreateThreadMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CreateThreadMutation,
    CreateThreadMutationVariables
  >(CreateThreadDocument, options)
}
export type CreateThreadMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CreateThreadMutation,
  CreateThreadMutationVariables
>
export const OpenThreadDocument = gql`
  mutation openThread($id: ID!) {
    openThread(input: { threadID: $id }) {
      title
      closed
      updatedAt
      id
    }
  }
`

/**
 * __useOpenThreadMutation__
 *
 * To run a mutation, you first call `useOpenThreadMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useOpenThreadMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useOpenThreadMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useOpenThreadMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        OpenThreadMutation,
        OpenThreadMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          OpenThreadMutation,
          OpenThreadMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    OpenThreadMutation,
    OpenThreadMutationVariables
  >(OpenThreadDocument, options)
}
export type OpenThreadMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  OpenThreadMutation,
  OpenThreadMutationVariables
>
export const CloseThreadDocument = gql`
  mutation closeThread($id: ID!) {
    closeThread(input: { threadID: $id }) {
      title
      closed
      updatedAt
      id
    }
  }
`

/**
 * __useCloseThreadMutation__
 *
 * To run a mutation, you first call `useCloseThreadMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCloseThreadMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCloseThreadMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useCloseThreadMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CloseThreadMutation,
        CloseThreadMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CloseThreadMutation,
          CloseThreadMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CloseThreadMutation,
    CloseThreadMutationVariables
  >(CloseThreadDocument, options)
}
export type CloseThreadMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CloseThreadMutation,
  CloseThreadMutationVariables
>
export const ThreadsDocument = gql`
  query threads($closed: Boolean, $size: Int, $from: Int, $word: String) {
    threads(input: { closed: $closed, size: $size, from: $from, word: $word }) {
      id
      title
      createdAt
      updatedAt
      closed
    }
  }
`

/**
 * __useThreadsQuery__
 *
 * To run a query within a Vue component, call `useThreadsQuery` and pass it any options that fit your needs.
 * When your component renders, `useThreadsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useThreadsQuery({
 *   closed: // value for 'closed'
 *   size: // value for 'size'
 *   from: // value for 'from'
 *   word: // value for 'word'
 * });
 */
export function useThreadsQuery(
  variables:
    | ThreadsQueryVariables
    | VueCompositionApi.Ref<ThreadsQueryVariables>
    | ReactiveFunction<ThreadsQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<ThreadsQuery, ThreadsQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<ThreadsQuery, ThreadsQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<ThreadsQuery, ThreadsQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<ThreadsQuery, ThreadsQueryVariables>(
    ThreadsDocument,
    variables,
    options
  )
}
export type ThreadsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  ThreadsQuery,
  ThreadsQueryVariables
>
