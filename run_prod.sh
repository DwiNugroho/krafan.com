#!/bin/bash

# Menjalankan docker-compose untuk membangun dan menjalankan layanan prod dan nginx
docker-compose up --build prod nginx
