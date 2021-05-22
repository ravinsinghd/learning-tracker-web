export interface CompletionStatus {
  _id: string;
  statusCount: [
    {
      status: 'pending' | 'completed';
      count: number;
    }
  ];
}

export const RING_ORDER = [
  'Data structures and algorithms',
  'Rust',
  'Android',
  'Mathematics',
  'English',
];
