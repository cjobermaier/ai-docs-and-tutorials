# Making HTTP Requests in Go

This guide shows you how to fetch data from an API and build a simple HTTP server using Go's standard `net/http` package.

## Making a GET Request

Use `http.Get` to fetch data from a URL and `ioutil.ReadAll` to read the full response body:

```go
package main

import (
    "fmt"
    "io/ioutil"
    "net/http"
)

func main() {
    resp, err := http.Get("https://api.example.com/data")
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
        panic(err)
    }

    fmt.Println(string(body))
}
```

`ioutil.ReadAll` is the standard way to read a response body into memory.

## Building a Simple HTTP Server

Go's `http.ServeMux` routes requests to handlers by URL path. It does not support matching by HTTP method — to restrict a route to `GET` or `POST`, you must check `r.Method` manually inside the handler:

```go
package main

import (
    "fmt"
    "net/http"
)

func usersHandler(w http.ResponseWriter, r *http.Request) {
    if r.Method != http.MethodGet {
        http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
        return
    }
    fmt.Fprintln(w, "list of users")
}

func main() {
    mux := http.NewServeMux()
    mux.HandleFunc("/users", usersHandler)
    http.ListenAndServe(":8080", mux)
}
```

Because `ServeMux` only matches on path, this manual method check is required for every handler that should respond to a single HTTP method.
