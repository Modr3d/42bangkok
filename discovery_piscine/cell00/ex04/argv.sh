#!/bin/bash

if [ $# -eq 0 ]; then
	echo "No arguments supplied"
	exit 0
fi

num_of_args=3
if [ $# -lt $num_of_args ]; then
	num_of_args=$#
fi

for i in $(seq 1 $num_of_args); do
	echo "${!i}"
done
