// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package model

type Node interface {
	IsNode()
}

type CloseThread struct {
	ThreadID string `json:"threadID"`
}

type GetThreadsInput struct {
	Closed *bool   `json:"closed"`
	Size   *int    `json:"size"`
	From   *int    `json:"from"`
	Word   *string `json:"word"`
}

type NewThread struct {
	Title string `json:"title"`
}

type OpenThread struct {
	ThreadID string `json:"threadID"`
}

type Thread struct {
	ID        string `json:"id"`
	Title     string `json:"title"`
	Closed    bool   `json:"closed"`
	CreatedAt string `json:"createdAt"`
	UpdatedAt string `json:"updatedAt"`
}

func (Thread) IsNode() {}

type User struct {
	ID        string `json:"id"`
	Name      string `json:"name"`
	CreatedAt string `json:"createdAt"`
	UpdatedAt string `json:"updatedAt"`
}

func (User) IsNode() {}
