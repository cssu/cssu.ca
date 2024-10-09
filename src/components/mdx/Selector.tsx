'use client'

import { useState } from 'react'

export default function Selector() {
    const [selectedYear, setSelectedYear] = useState<string>('')
    const [selectedDepartment, setSelectedDepartment] = useState<string>('')

    const handleYearChange = (year: string) => {
        if (year === selectedYear) {
            setSelectedYear('')
        } else {
            setSelectedYear(year)
        }
    }

    const handleDepartmentChange = (department: string) => {
        if (department === selectedDepartment) {
            setSelectedDepartment('')
        } else {
            setSelectedDepartment(department)
        }
    }

    const years = ['‍🍼 1st Year', '👦 2nd Year', '👩 3rd Year', '👴 4th Year', '⚰️ 5th Year+']
    const departments = [
        '📚 Academic',
        '👥 Social',
        '🏠 Internal',
        '🌎 External',
        '💸 Finance',
        '💻 Web',
    ]

    return (
        <>
            <label htmlFor="year-select" className="block mb-2 text-sm font-bold text-gray-600">
                Filter members (click each attribute to select/unselect it)
            </label>
            <div className="flex-shrink-0 w-full flex space-x-2">
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => handleYearChange(year)}
                        className={`
                            px-4 py-2 text-sm font-medium rounded-md border border-gray-300 w-1/4
                                ${
                                    selectedYear === year
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }
                            `}
                    >
                        {year}
                    </button>
                ))}
            </div>
            <div className="flex-shrink-0 w-full py-2 flex space-x-2">
                {departments.map((department) => (
                    <button
                        key={department}
                        onClick={() => handleDepartmentChange(department)}
                        className={`px-4 py-2 text-sm font-medium rounded-md border border-gray-300 w-1/6
                                ${
                                    selectedDepartment === department
                                        ? 'bg-gray-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }
                            `}
                    >
                        {department}
                    </button>
                ))}
            </div>
        </>
    )
}
