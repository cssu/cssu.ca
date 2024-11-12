'use client'

import { useState } from 'react'

interface SelectorProps {
    selectedYear: number
    selectedDepartment: string
    setSelectedYear: (year: number) => void
    setSelectedDepartment: (department: string) => void
}

const Selector: React.FC<SelectorProps> = ({
    selectedYear,
    selectedDepartment,
    setSelectedYear,
    setSelectedDepartment,
}) => {
    const handleYearChange = (year: number) => {
        if (year === selectedYear) {
            setSelectedYear(0)
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

    const years = [
        { val: 1, display: '‍🍼 1st Year' },
        { val: 2, display: '👦 2nd Year' },
        { val: 3, display: '👩 3rd Year' },
        { val: 4, display: '👴 4th Year' },
        { val: 5, display: '⚰️ 5th Year+' },
    ]
    const departments = [
        { val: 'academic', display: '📚 Academic' },
        { val: 'social', display: '👥 Social' },
        { val: 'internal', display: '🏠 Internal' },
        { val: 'external', display: '🌎 External' },
        { val: 'finance', display: '💸 Finance' },
        { val: 'communications', display: '💬 Communications' },
        { val: 'web', display: '💻 Web' },
    ]

    return (
        <>
            <label htmlFor="year-select" className="block mb-2 text-sm font-bold text-gray-600">
                Filter members (click each attribute to select/unselect it)
            </label>
            <div className="flex-shrink-0 w-full flex space-x-2">
                {years.map((year, index) => (
                    <button
                        key={index}
                        onClick={() => handleYearChange(year.val)}
                        className={`
                            px-4 py-2 text-sm font-medium rounded-md border border-gray-300 w-1/4
                                ${
                                    selectedYear === year.val
                                        ? 'bg-blue-900 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }
                            `}
                    >
                        {year.display}
                    </button>
                ))}
            </div>
            <div className="flex-shrink-0 w-full py-2 flex space-x-2">
                {departments.map((department, index) => (
                    <button
                        key={index}
                        onClick={() => handleDepartmentChange(department.val)}
                        className={`px-4 py-2 text-sm font-medium rounded-md border border-gray-300 w-1/6
                                ${
                                    selectedDepartment === department.val
                                        ? 'bg-gray-600 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                }
                            `}
                    >
                        {department.display}
                    </button>
                ))}
            </div>
        </>
    )
}

export default Selector
