#!/usr/bin/env python
from http.server import SimpleHTTPRequestHandler
import socketserver

class MyHTTPRequestHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        SimpleHTTPRequestHandler.end_headers(self)

if __name__ == '__main__':
    with socketserver.TCPServer(("", 8001), MyHTTPRequestHandler) as httpd:
        print("serving at port", 8001)
        httpd.serve_forever()