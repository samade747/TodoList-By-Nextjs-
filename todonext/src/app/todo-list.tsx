"use client";
import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";


interface Task {
    id: number;
    text: string;
    completed: boolean;
  }

  const [tasks, setTasks] = useState<Task[]>([]);
const [newTask, setNewTask] = useState<string>("");
const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
const [editedTaskText, setEditedTaskText] = useState<string>("");
const [isMounted, setIsMounted] = useState<boolean>(false);



useEffect(() => {
    setIsMounted(true);
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks) as Task[]);
    }
  }, []);